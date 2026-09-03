'use client';

import { FormEvent, useState } from 'react';

const feedbackUrl =
  'https://qfarbetjxywexvpgiucf.supabase.co/functions/v1/feedback';

export function BetaApplicationForm() {
  const [contact, setContact] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
      setContact('');
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
    <section className="beta-apply-panel section-shell" id="beta-apply">
      <div>
        <p className="eyebrow">JOIN THE CLOSED BETA</p>
        <h2>申请一个内测码，亲自试试茸宝。</h2>
        <p>
          填写常用的邮箱或手机号码即可提交申请。审核后，我们会把 6 位内测码发送给你。
        </p>
      </div>
      <form className="beta-apply-form" onSubmit={handleSubmit}>
        <label htmlFor="beta-contact">邮箱或手机号码</label>
        <div className="beta-apply-input-row">
          <input
            id="beta-contact"
            name="contact"
            type="text"
            autoComplete="email tel"
            value={contact}
            onChange={(event) => setContact(event.target.value)}
            placeholder="例如 13800138000 或 name@example.com"
            required
            disabled={submitting}
          />
          <button type="submit" disabled={submitting}>
            {submitting ? '提交中…' : '提交申请'}
          </button>
        </div>
        <small>仅用于内测联系，不会自动创建账号。</small>
        {status && <p className="beta-form-status success">{status}</p>}
        {error && <p className="beta-form-status error">{error}</p>}
      </form>
    </section>
  );
}
