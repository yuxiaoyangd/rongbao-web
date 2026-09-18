'use client';

import { FormEvent, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

const feedbackUrl =
  'https://qfarbetjxywexvpgiucf.supabase.co/functions/v1/feedback';

type BetaApplicationFormProps = {
  className?: string;
};

export function BetaApplicationForm({ className }: BetaApplicationFormProps) {
  const [open, setOpen] = useState(false);
  const [contact, setContact] = useState('');
  const [confirming, setConfirming] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [submittedContact, setSubmittedContact] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return undefined;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !submitting) setOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, submitting]);

  function openDialog() {
    setStatus(null);
    setSubmittedContact('');
    setError(null);
    setConfirming(false);
    setOpen(true);
  }

  function closeDialog() {
    if (!submitting) {
      setConfirming(false);
      setOpen(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting || status) return;
    setError(null);
    setConfirming(true);
  }

  async function submitApplication() {
    if (submitting) return;

    setSubmitting(true);
    setStatus(null);
    setError(null);
    try {
      const response = await fetch(feedbackUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category: 'beta_application',
          contact: contact.trim(),
          message: '申请茸宝 Android 内测',
          source: 'website',
        }),
      });
      const payload = (await response.json().catch(() => ({}))) as {
        error?: string;
      };
      if (!response.ok) {
        throw new Error(payload.error || '提交失败，请稍后再试');
      }
      setSubmittedContact(contact.trim());
      setConfirming(false);
      setStatus('申请已提交，我们会通过该联系方式发送内测码。');
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : '提交失败，请稍后再试',
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <button
        className={className || 'beta-apply-link'}
        type="button"
        onClick={openDialog}
      >
        申请内测码
      </button>
      {open &&
        createPortal(
          <div
            className="beta-modal-overlay"
            role="presentation"
            onClick={closeDialog}
          >
            <div
              className={`beta-modal${status ? ' beta-modal-success' : ''}`}
              role="dialog"
              aria-modal="true"
              aria-labelledby="beta-modal-title"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="beta-modal-close"
                type="button"
                aria-label="关闭申请窗口"
                onClick={closeDialog}
              >
                ×
              </button>
              <h2 id="beta-modal-title">{status ? '申请已提交' : '申请内测码'}</h2>
              {status ? (
                <p className="beta-modal-description beta-contact-result">
                  内测码将在通过后发送至：
                  <strong>{submittedContact || contact}</strong>
                </p>
              ) : (
                <p className="beta-modal-description">
                  邮箱或手机号将作为登录账号，并用于接收内测码。
                </p>
              )}
              {status ? (
                <div className="beta-success-state" role="status">
                  <div className="beta-qr-card">
                    <Image
                      src="/wechat-customer-qr.png"
                      alt="茸宝客服微信二维码"
                      width={320}
                      height={473}
                    />
                  </div>
                  <p className="beta-qr-caption">
                    添加客服微信，直接获取内测码（推荐）
                  </p>
                  <button
                    className="beta-modal-submit"
                    type="button"
                    onClick={closeDialog}
                  >
                    关闭
                  </button>
                </div>
              ) : (
                <>
                  <form className="beta-apply-form" onSubmit={handleSubmit}>
                    <label htmlFor="beta-contact">邮箱或手机号码</label>
                    <input
                      id="beta-contact"
                      name="contact"
                      type="text"
                      autoComplete="email tel"
                      value={contact}
                      onChange={(event) => setContact(event.target.value)}
                      placeholder="请输入邮箱或手机号码"
                      required
                    />
                    {error && !confirming && (
                      <p className="beta-form-status error">{error}</p>
                    )}
                    <button className="beta-modal-submit" type="submit">
                      提交申请
                    </button>
                  </form>
                </>
              )}
              {confirming && !status && (
                <div
                  className="beta-confirm-overlay"
                  role="presentation"
                  onClick={() => !submitting && setConfirming(false)}
                >
                  <div
                    className="beta-confirm-dialog"
                    role="alertdialog"
                    aria-modal="true"
                    aria-labelledby="beta-confirm-title"
                    onClick={(event) => event.stopPropagation()}
                  >
                    <h2 id="beta-confirm-title">确认提交申请？</h2>
                    <p>
                      <strong>{contact}</strong>
                      <br />
                      将作为登录账号，并用于接收内测码。
                    </p>
                    <div className="beta-confirm-actions">
                      <button
                        type="button"
                        onClick={() => setConfirming(false)}
                        disabled={submitting}
                      >
                        返回修改
                      </button>
                      <button
                        type="button"
                        onClick={submitApplication}
                        disabled={submitting}
                      >
                        {submitting ? '提交中…' : '确认提交'}
                      </button>
                    </div>
                    {error && (
                      <p className="beta-form-status error">{error}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
