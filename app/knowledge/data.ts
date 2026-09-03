export type KnowledgeSection = {
  heading: string;
  body?: string;
  items?: string[];
};

export type KnowledgeArticle = {
  slug: string;
  title: string;
  description: string;
  category: string;
  categoryLabel: string;
  readingTime: string;
  intro: string;
  sections: KnowledgeSection[];
  note: string;
  source: {
    name: string;
    url: string;
  };
  relatedSlugs: string[];
};

export const knowledgeArticles: KnowledgeArticle[] = [
  {
    slug: 'dog-vomiting',
    title: '狗狗呕吐怎么办？先看次数、精神和危险信号',
    description: '狗狗呕吐后先记录次数、内容物、精神食欲和是否误食，再判断是否需要尽快联系兽医。',
    category: 'health',
    categoryLabel: '健康观察',
    readingTime: '3 分钟',
    intro: '一次呕吐不等于某一种疾病，但反复呕吐、精神变差或伴随其他异常时，不适合只在家继续观察。先把发生经过和伴随症状记录下来，能帮助兽医更快判断下一步。',
    sections: [
      {
        heading: '先记录这几件事',
        items: ['发生了几次、持续多久', '呕吐物是否带血、异物或异常颜色', '精神、食欲、饮水和排便有没有变化', '近期是否换粮、误食、接触药物或吞过异物'],
      },
      {
        heading: '这些情况不要继续等',
        body: '反复呕吐、明显腹胀或无效干呕、严重腹痛、虚弱倒地、呼吸异常、呕血、疑似中毒或吞食异物，都应尽快联系兽医；出现呼吸困难、意识异常或严重虚弱时直接按急症处理。',
      },
      {
        heading: '在家先做什么',
        body: '保持安静，记录症状并电话咨询兽医，不要自行使用人用药物，也不要用固定时长的禁食方案替代判断。幼犬、老年犬或有基础病的狗狗更应谨慎。',
      },
    ],
    note: '本文用于帮助主人整理观察信息，不替代兽医检查和诊疗。',
    source: { name: 'Merck Veterinary Manual｜犬猫急症处理', url: 'https://www.merckvetmanual.com/special-pet-topics/emergencies/what-to-do-in-a-dog-or-cat-emergency' },
    relatedSlugs: ['dog-diarrhea', 'dog-food-transition', 'pet-pain-signs'],
  },
  {
    slug: 'cat-not-eating',
    title: '猫咪不吃饭怎么办？先判断持续时间和伴随症状',
    description: '猫咪突然不吃饭需要认真记录，持续拒食、精神变差或出现黄疸时应及时联系兽医。',
    category: 'health',
    categoryLabel: '健康观察',
    readingTime: '3 分钟',
    intro: '猫咪拒食可能与口腔疼痛、胃肠不适、压力或其他疾病有关，不能简单归结为挑食。尤其是原本肥胖、幼龄、老年或有慢性病的猫，持续不吃更需要尽早评估。',
    sections: [
      {
        heading: '先观察并记录',
        items: ['从什么时候开始，完全不吃还是只减少', '饮水、排尿、排便、呕吐和精神状态', '是否流口水、躲藏、咀嚼困难或出现黄疸', '最近是否换粮、搬家、添置新宠或改变喂食环境'],
      },
      {
        heading: '为什么不能长期等',
        body: '猫咪持续拒食可能伴随脂肪肝等严重问题，特别是体重偏高的猫风险更值得重视。不要只等它“自己想吃”，而应根据持续时间和伴随症状咨询兽医。',
      },
      {
        heading: '不要强行套用家庭偏方',
        body: '不要自行喂人用药、强行灌食或用大量零食掩盖问题。可以保持安静、提供熟悉且安全的食物并记录摄入量；如果仍不吃或状态变差，应尽快就医。',
      },
    ],
    note: '猫咪拒食的具体风险与年龄、体况和基础疾病有关，本文不提供统一等待时长。',
    source: { name: 'Cornell University College of Veterinary Medicine｜Hepatic Lipidosis', url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/hepatic-lipidosis' },
    relatedSlugs: ['cat-urinary-problems', 'cat-food-guide', 'pet-pain-signs'],
  },
  {
    slug: 'dog-diarrhea',
    title: '狗狗拉稀怎么办？先看频率、精神和脱水风险',
    description: '狗狗腹泻时先记录次数、血便、呕吐、精神食欲和近期饮食变化，再决定是否需要就医。',
    category: 'health',
    categoryLabel: '健康观察',
    readingTime: '3 分钟',
    intro: '软便或腹泻的原因很多，单看粪便形态无法判断病因。主人最有价值的工作，是记录变化并识别危险信号，而不是马上使用家中的止泻药。',
    sections: [
      {
        heading: '记录这些信息',
        items: ['一天发生几次，持续了多久', '是否带血、黑色或大量黏液', '是否同时呕吐、腹痛、发热感或精神变差', '近期是否换粮、吃零食、翻垃圾或接触药物'],
      },
      {
        heading: '出现这些情况要联系兽医',
        body: '幼犬、老年犬、有基础病的狗，或出现血便、反复呕吐、明显虚弱、腹部疼痛、脱水、疑似中毒或吞食异物时，不要只在家观察。症状快速加重或伴随意识异常时应按急症处理。',
      },
      {
        heading: '家庭观察的边界',
        body: '保持饮水可获得，记录排便和精神变化，暂时避免零食和突然增加的新食物。不要自行使用人用止泻药，也不要用固定时长禁食替代兽医判断。',
      },
    ],
    note: '腹泻不是一个独立诊断，持续时间和伴随症状比单次软便更重要。',
    source: { name: 'Merck Veterinary Manual｜犬猫急症处理', url: 'https://www.merckvetmanual.com/special-pet-topics/emergencies/what-to-do-in-a-dog-or-cat-emergency' },
    relatedSlugs: ['dog-vomiting', 'dog-food-transition', 'pet-pain-signs'],
  },
  {
    slug: 'cat-urinary-problems',
    title: '猫咪频繁进猫砂盆怎么办？警惕排尿异常',
    description: '猫咪频繁进出猫砂盆、用力排尿或只排出少量尿液时，应尽快联系兽医，公猫尤其不能拖延。',
    category: 'health',
    categoryLabel: '健康观察',
    readingTime: '3 分钟',
    intro: '频繁进出猫砂盆、用力排尿、叫声异常或尿液带血，都可能提示下泌尿道问题。仅凭表现通常不能确定原因，需要兽医检查；完全尿不出来属于需要紧急处理的情况。',
    sections: [
      {
        heading: '常见需要注意的表现',
        items: ['频繁进出猫砂盆或反复刨砂', '排尿时用力、疼痛叫喊或只排出少量尿液', '尿液带血、在猫砂盆外排尿', '舔舐生殖区域、变安静、食欲下降或呕吐'],
      },
      {
        heading: '公猫排尿困难不要等待',
        body: '公猫尿道相对狭窄，尿道阻塞可能快速恶化。用力排尿但没有尿、精神明显变差、呕吐或倒地时，应立即联系急诊兽医，不要把它当成便秘自行处理。',
      },
      {
        heading: '就医前可以记录什么',
        body: '记录最后一次正常排尿时间、尿量变化、血尿、饮水、食欲和行为变化。不要自行喂抗生素或止痛药，也不要因为暂时排出少量尿液就取消就医。',
      },
    ],
    note: '排尿异常的原因需要检查才能区分，本文不用于判断膀胱炎、结石或感染。',
    source: { name: 'International Cat Care｜Lower Urinary Tract Diseases', url: 'https://icatcare.org/resources/cat-carer-guide-urinary-tract-diseases.pdf' },
    relatedSlugs: ['cat-not-eating', 'cat-inappropriate-urination', 'indoor-cat-parasites'],
  },
  {
    slug: 'dog-eating-rocks',
    title: '狗狗总咬石头怎么办？先阻断吞食风险',
    description: '狗狗反复咬石头或吞食非食物物品时，应先管理环境并排查吞食异物、营养和行为因素。',
    category: 'behavior',
    categoryLabel: '行为与安全',
    readingTime: '3 分钟',
    intro: '咬石头、吞土、吞布料等行为可能属于异食行为，也可能与探索、无聊、焦虑或身体问题有关。第一步不是责骂，而是避免它继续接触危险物品。',
    sections: [
      {
        heading: '先做环境管理',
        items: ['清理活动区域的石头和可吞食异物', '外出时使用合适的牵引和看护方式', '用安全的嗅闻、互动和咀嚼活动替代', '记录行为发生的时间、地点和触发因素'],
      },
      {
        heading: '吞下石头后要观察什么',
        body: '如果已经吞下石头，或随后出现反复呕吐、腹部疼痛、精神变差、食欲下降、排便异常或腹胀，应尽快联系兽医。不要自行催吐或等待异物一定会排出。',
      },
      {
        heading: '训练要用替代和奖励',
        body: '在确认安全距离后，用“放下”“看我”等可替代行为配合奖励，逐步降低接触机会。持续、突然加重或伴随其他异常时，应让兽医评估身体和营养因素。',
      },
    ],
    note: '行为矫正不能替代对异物吞食和潜在疾病的排查。',
    source: { name: 'VCA Animal Hospitals｜Pica in Dogs', url: 'https://vcahospitals.com/know-your-pet/pica-in-dogs' },
    relatedSlugs: ['dog-barking', 'cat-inappropriate-urination', 'dog-vomiting'],
  },
  {
    slug: 'dog-barking',
    title: '狗狗见人就叫怎么办？先排查恐惧和健康问题',
    description: '狗狗对人吠叫时，先记录触发距离和身体语言，再用降低刺激、奖励安静的方式逐步训练。',
    category: 'behavior',
    categoryLabel: '行为与安全',
    readingTime: '3 分钟',
    intro: '吠叫可能来自兴奋、恐惧、警戒、挫败或疼痛。单纯提高音量训斥，往往不能解决触发原因，还可能让狗狗更紧张。',
    sections: [
      {
        heading: '先记录触发条件',
        items: ['对什么人、动物或声音反应', '触发时的距离、环境和持续时间', '身体是放松、后缩、僵硬还是向前冲', '最近是否突然出现或明显加重'],
      },
      {
        heading: '训练从降低刺激开始',
        body: '先把狗狗带到还能保持相对平静的距离，看到触发目标但没有爆发时立即奖励，再逐步缩短距离。每次训练都应让它有退出和休息的空间。',
      },
      {
        heading: '这些情况需要专业帮助',
        body: '突然出现的行为变化、伴随疼痛或其他身体异常、已经有伤人风险、持续自伤或完全无法恢复平静时，应先联系兽医，必要时转介合格的行为专业人员。',
      },
    ],
    note: '不要用殴打、勒紧或持续恐吓替代行为评估和训练。',
    source: { name: 'Merck Veterinary Manual｜Behavior Problems of Dogs', url: 'https://www.merckvetmanual.com/behavior/behavior-of-dogs/behavior-problems-of-dogs' },
    relatedSlugs: ['dog-eating-rocks', 'cat-inappropriate-urination', 'pet-pain-signs'],
  },
  {
    slug: 'cat-inappropriate-urination',
    title: '猫咪乱尿怎么办？先检查身体和猫砂环境',
    description: '猫咪在猫砂盆外排尿时，先排除泌尿道问题，再检查猫砂盆、环境压力和日常变化。',
    category: 'behavior',
    categoryLabel: '行为与安全',
    readingTime: '3 分钟',
    intro: '猫咪乱尿不一定是“报复”或故意捣乱。疼痛、排尿异常、猫砂盆不合适、压力和多猫冲突都可能参与其中，先排除身体问题比惩罚更重要。',
    sections: [
      {
        heading: '先排除排尿异常',
        items: ['是否频繁进出猫砂盆、用力或叫喊', '是否只排出少量尿液或尿液带血', '是否舔舐生殖区域、食欲下降或精神变差', '是否突然开始，或同时出现饮水和尿量变化'],
      },
      {
        heading: '再检查猫砂环境',
        body: '记录排尿位置、时间和姿势，检查猫砂盆是否干净、容易到达、位于安静安全处，以及最近是否发生搬家、装修、新宠或猫之间的冲突。逐步调整环境，比一次改变所有条件更容易判断原因。',
      },
      {
        heading: '不要惩罚',
        body: '打骂、强行把猫放进猫砂盆或使用刺激性清洁剂，可能增加压力并让问题持续。若出现无尿、血尿、明显疼痛或精神变差，应立即联系兽医。',
      },
    ],
    note: '只有在身体问题和环境因素都得到评估后，才适合制定更具体的行为方案。',
    source: { name: 'Merck Veterinary Manual｜Behavior Problems of Dogs（犬猫行为问题参考）', url: 'https://www.merckvetmanual.com/behavior/behavior-of-dogs/behavior-problems-of-dogs' },
    relatedSlugs: ['cat-urinary-problems', 'dog-barking', 'indoor-cat-parasites'],
  },
  {
    slug: 'dog-food-transition',
    title: '狗狗换粮后拉稀怎么办？如何更稳妥地过渡',
    description: '换粮后出现软便时，先回顾换粮速度、零食和精神食欲，再按耐受情况调整，不要一次加入多个变量。',
    category: 'nutrition',
    categoryLabel: '饮食与营养',
    readingTime: '3 分钟',
    intro: '换粮可能带来短暂的胃肠反应，但拉稀也可能与感染、误食或其他健康问题有关。换粮时保持过程可追踪，才能知道是哪一步引起了变化。',
    sections: [
      {
        heading: '换粮前先看包装信息',
        items: ['是否适合狗狗当前生命阶段', '是否属于完整均衡的日常主食', '近期是否同时增加零食、营养品或餐桌食物', '新粮和旧粮是否都在保质期内并妥善保存'],
      },
      {
        heading: '过渡要循序渐进',
        body: '把新旧食物分阶段替换，具体速度根据狗狗的粪便、食欲和精神状态调整。不要在换粮期间同时更换零食、补充剂或喂食时间，否则很难判断原因。',
      },
      {
        heading: '出现异常先暂停复杂尝试',
        body: '如果持续腹泻、反复呕吐、带血、精神变差或怀疑误食，应联系兽医，不要只靠换回旧粮解决。幼犬、老年犬和有基础病的狗狗更应及时评估。',
      },
    ],
    note: '换粮不是治疗方案；疾病相关饮食应由兽医结合检查结果制定。',
    source: { name: 'AAHA｜Feeding Plans for Healthy, Appropriate Weight Cats and Dogs', url: 'https://www.aaha.org/resources/2021-aaha-nutrition-and-weight-management-guidelines/feeding-plans-for-healthy-appropriate-weight-cats-and-dogs/' },
    relatedSlugs: ['dog-diarrhea', 'cat-food-guide', 'indoor-cat-parasites'],
  },
  {
    slug: 'cat-food-guide',
    title: '猫咪吃干粮还是湿粮？先看完整均衡和个体情况',
    description: '猫咪饮食选择不能只看干粮或湿粮，关键是完整均衡、适合生命阶段、摄入量和个体健康状况。',
    category: 'nutrition',
    categoryLabel: '饮食与营养',
    readingTime: '3 分钟',
    intro: '干粮和湿粮各有喂养场景，不能仅凭一种形式判断好坏。选择时先看产品是否适合猫咪当前生命阶段、是否标明完整均衡，再结合饮水、体况和兽医建议调整。',
    sections: [
      {
        heading: '选主食先看三点',
        items: ['是否标明完整均衡或适合长期喂食', '是否适合当前生命阶段', '总摄入量是否与体重、体况和活动量相匹配'],
      },
      {
        heading: '干粮和湿粮不是固定二选一',
        body: '湿粮可以帮助增加食物中的水分，干粮则有保存和喂食管理上的便利。具体组合要看猫咪的饮水、食欲、体况、牙口和疾病情况，不建议套用统一比例。',
      },
      {
        heading: '零食不能替代主食',
        body: '零食、营养品和标注为补充用途的食物不一定能提供完整营养。若猫咪有肾脏、泌尿道或其他疾病，治疗性饮食应先咨询兽医，不要自行替代处方方案。',
      },
    ],
    note: '体重和体况的持续变化，是评估喂养是否合适的重要线索。',
    source: { name: 'FDA｜Complete and Balanced Pet Food；Cornell｜Feeding Your Cat', url: 'https://www.fda.gov/animal-veterinary/animal-health-literacy/complete-and-balanced-pet-food' },
    relatedSlugs: ['dog-food-transition', 'cat-not-eating', 'indoor-cat-parasites'],
  },
  {
    slug: 'puppy-vaccination',
    title: '幼犬疫苗怎么安排？别忽略基础免疫',
    description: '幼犬疫苗计划要结合母源抗体、产品说明、当地规定和兽医判断，不能只看一个固定月龄。',
    category: 'prevention',
    categoryLabel: '预防与护理',
    readingTime: '3 分钟',
    intro: '幼犬早期可能受到母源抗体影响，基础免疫通常需要按产品和兽医计划完成多次接种。具体时间会受到疫苗种类、健康状态、地区和生活方式影响。',
    sections: [
      {
        heading: '核心疫苗和非核心疫苗不同',
        body: '核心疫苗用于防范普遍且严重的疾病；非核心疫苗是否需要接种，要结合所在地区、外出、旅行、寄养和接触其他动物的风险决定。',
      },
      {
        heading: '接种前后记录好信息',
        items: ['接种当天的健康状态', '疫苗名称、日期、批号和接种部位', '后续复种计划和兽医给出的注意事项', '接种后是否出现面部肿胀、呼吸异常、虚弱或倒地'],
      },
      {
        heading: '出现严重反应要及时处理',
        body: '接种后出现呼吸异常、面部明显肿胀、虚弱倒地或快速恶化时，应立即联系兽医。不要因为网上的统一时间表而替代对幼犬实际健康状态的判断。',
      },
    ],
    note: '本文不提供固定接种日期；请以当地法规、获批产品说明和兽医计划为准。',
    source: { name: 'WSAVA｜犬猫疫苗接种指南（2024 中文版）', url: 'https://wsava.org/wp-content/uploads/2024/05/Chinese-Ver-2024-Vaccination-Guideline-for-Dogs-Cats.pdf' },
    relatedSlugs: ['indoor-cat-parasites', 'pet-dental-care', 'pet-pain-signs'],
  },
  {
    slug: 'indoor-cat-parasites',
    title: '室内猫需要驱虫吗？按真实暴露风险判断',
    description: '纯室内生活不等于零暴露，猫咪驱虫和检测应结合地区、外出、旅行及接触其他动物的情况。',
    category: 'prevention',
    categoryLabel: '预防与护理',
    readingTime: '3 分钟',
    intro: '室内猫的寄生虫风险通常与外出、家中其他动物、旅行、蚊虫和地区流行情况有关。与其机械执行一个固定频率，不如先把真实暴露情况告诉兽医。',
    sections: [
      {
        heading: '评估这些暴露因素',
        items: ['是否外出、寄养或旅行', '是否接触其他猫狗或新带回家的动物', '家中是否可能有跳蚤、蚊虫或啮齿动物', '所在地区和季节是否有相应寄生虫风险'],
      },
      {
        heading: '驱虫计划需要个体化',
        body: '预防和检测方案应结合物种、年龄、体重、生活方式、地区以及既往用药情况制定。不要因为猫咪看起来健康，或因为一直在室内，就直接判断完全没有风险。',
      },
      {
        heading: '用药前确认适用对象',
        body: '只使用明确适用于猫咪的产品，并按标签和兽医指导使用。不要把狗用驱虫药直接用于猫，也不要自行叠加不同产品。出现持续呕吐、虚弱或异常反应时及时联系兽医。',
      },
    ],
    note: '预防频率和产品选择不是单靠搜索结果就能决定的处方问题。',
    source: { name: 'Companion Animal Parasite Council｜General Guidelines', url: 'https://capcvet.org/guidelines/general-guidelines/' },
    relatedSlugs: ['puppy-vaccination', 'cat-urinary-problems', 'cat-inappropriate-urination'],
  },
  {
    slug: 'pet-dental-care',
    title: '宠物口臭怎么办？刷牙不能替代牙科检查',
    description: '持续口臭、流口水、偏侧咀嚼或拒绝硬食可能提示口腔问题，需要把家庭护理和兽医检查结合起来。',
    category: 'care',
    categoryLabel: '日常护理',
    readingTime: '3 分钟',
    intro: '口臭不是宠物“正常的味道”。牙龈、牙周和牙齿问题可能藏在牙龈下方，单看牙齿表面或只清除可见牙结石并不能排除口腔疾病。',
    sections: [
      {
        heading: '这些表现值得检查',
        items: ['持续口臭、流口水或口腔出血', '偏侧咀嚼、掉落食物或拒绝硬食', '抓挠嘴部、触碰口腔时疼痛', '牙龈红肿、牙齿松动或食欲下降'],
      },
      {
        heading: '家庭护理从刷牙开始',
        body: '规律刷牙是控制牙菌斑的重要家庭方法，应逐步训练并使用宠物专用牙膏。不要使用可能被吞咽的人用牙膏，也不要把过硬的骨头或玩具当作洁牙替代品。',
      },
      {
        heading: '什么时候需要兽医检查',
        body: '持续口臭、明显疼痛、出血、进食困难或牙龈下病变风险较高时，应进行完整口腔检查。无麻醉清洁不能替代对牙龈下方和牙周组织的评估。',
      },
    ],
    note: '口腔护理建议不能替代兽医的牙科检查和治疗计划。',
    source: { name: 'WSAVA｜Global Dental Guidelines', url: 'https://wsava.org/wp-content/uploads/2021/05/WSAVA-Global-Dental-Guidelines-JSAPMandarin.pdf' },
    relatedSlugs: ['pet-pain-signs', 'dog-food-transition', 'puppy-vaccination'],
  },
  {
    slug: 'pet-pain-signs',
    title: '猫咪不叫就代表不疼吗？识别宠物隐蔽疼痛信号',
    description: '犬猫可能隐藏疼痛，躲藏、跛行、跳跃减少、食欲下降或不愿被触碰都值得记录和评估。',
    category: 'health',
    categoryLabel: '健康观察',
    readingTime: '3 分钟',
    intro: '不叫、不挣扎不代表没有疼痛。犬猫更常通过活动、姿势、食欲、睡眠、梳理和与人的互动变化表现不适，和它平时的状态比较尤其重要。',
    sections: [
      {
        heading: '可能出现的变化',
        items: ['跛行、不愿跳跃或活动减少', '躲藏、蜷缩、睡眠和梳理习惯改变', '食欲下降、喘气或不愿被触碰', '突然易怒、叫声变化或与人互动减少'],
      },
      {
        heading: '记录变化比猜病名更重要',
        body: '拍摄走路、上下台阶、进食或休息时的短视频，记录出现时间、频率和是否加重，并把既往疾病和正在使用的药物告诉兽医。',
      },
      {
        heading: '不要自行使用止痛药',
        body: '人用止痛药或其他宠物剩余药物可能对当前动物、物种或基础病不安全。严重创伤、呼吸异常、瘫痪、意识改变或剧烈疼痛时应立即就医。',
      },
    ],
    note: '疼痛评估需要结合物种、病史和检查，不能只凭一个行为表现下结论。',
    source: { name: 'WSAVA｜犬猫疼痛识别、评估和治疗指南', url: 'https://wsava.org/wp-content/uploads/2023/02/Reduced_Chinese_Simplified_2022%E5%B9%B4WSAVA%E7%96%BC%E7%97%9B%E8%AF%86%E5%88%AB%E3%80%81%E8%AF%84%E4%BC%B0%E5%92%8C%E6%B2%BB%E7%96%97%E6%8C%87%E5%8D%97.pdf' },
    relatedSlugs: ['cat-not-eating', 'pet-dental-care', 'dog-vomiting'],
  },
  {
    slug: 'pet-spay-timing',
    title: '狗猫什么时候绝育？没有适合所有宠物的统一月龄',
    description: '犬猫绝育时机要结合物种、性别、体型、品种、健康状况、生活方式和繁殖计划个体化讨论。',
    category: 'care',
    categoryLabel: '日常护理',
    readingTime: '3 分钟',
    intro: '“几个月绝育最好”没有适用于所有犬猫的单一答案。决定前需要同时讨论繁殖控制、健康获益、手术风险、体型和生活方式，而不是只套用网上的固定月龄。',
    sections: [
      {
        heading: '和兽医讨论这些信息',
        items: ['物种、性别、年龄、体型和品种', '当前健康状况、体况和既往病史', '是否有明确繁殖计划', '生活环境、行为问题和术后照护条件'],
      },
      {
        heading: '获益和风险要一起看',
        body: '绝育可能带来繁殖控制和部分健康方面的获益，也可能伴随手术、代谢、骨骼或其他个体风险。应让兽医结合具体动物说明，而不是用一个时间点替代评估。',
      },
      {
        heading: '绝育不一定解决行为问题',
        body: '标记、游走、争斗或骑跨可能受激素影响，也可能与学习、压力和环境有关。术前后都要观察行为变化，必要时配合环境管理和行为专业支持。',
      },
    ],
    note: '本文不提供统一绝育月龄；具体方案请由兽医结合个体情况制定。',
    source: { name: 'WSAVA｜犬猫繁殖管理指南（2024 中文版）', url: 'https://wsava.org/wp-content/uploads/2025/04/%EF%BC%88%E5%B7%B2%E5%8E%8B%E7%BC%A9%EF%BC%89%E9%99%84%E4%BB%B6%EF%BC%9A%E3%80%8AWSAVA%E7%8A%AC%E7%8C%AB%E7%94%9F%E6%AE%96%E7%AE%A1%E7%90%86%E6%8C%87%E5%8D%97%E3%80%8B%EF%BC%88%E4%B8%AD%E6%96%87%E7%89%88%EF%BC%89250422-2-175.pdf' },
    relatedSlugs: ['puppy-vaccination', 'dog-barking', 'pet-pain-signs'],
  },
  {
    slug: 'dog-ear-scratching',
    title: '狗狗总抓耳朵怎么办？外耳炎需要检查原因',
    description: '抓耳、摇头、异味、红肿和分泌物可能提示耳部问题，病因不同，不能只凭表现自行滴药。',
    category: 'health',
    categoryLabel: '健康观察',
    readingTime: '3 分钟',
    intro: '狗狗抓耳朵可能与寄生虫、异物、过敏、细菌或酵母有关。相似的外在表现背后处理方式不同，通常需要耳镜和分泌物检查来确定方向。',
    sections: [
      {
        heading: '先观察这些表现',
        items: ['摇头、抓耳、耳朵异味或分泌物', '耳廓或耳道红肿、结痂', '触碰时疼痛、躲避或突然易怒', '头部倾斜、走路不稳或面部神经异常'],
      },
      {
        heading: '不要自行深掏或随意滴药',
        body: '耳膜状态和病因不明确时，深度清洁或不合适的滴耳药可能加重疼痛、刺激或听觉损伤。先让兽医检查，再根据结果决定清洁和用药方式。',
      },
      {
        heading: '这些情况应尽快就医',
        body: '明显疼痛、大量分泌物、头部倾斜、平衡异常、面部神经异常或症状快速加重时，应尽快联系兽医。不要因为暂时不抓耳就认为问题已经解决。',
      },
    ],
    note: '耳部问题常需要检查才能区分原因，本文不推荐具体滴耳药或用药剂量。',
    source: { name: 'Merck Veterinary Manual｜Otitis Externa in Animals', url: 'https://www.merckvetmanual.com/ear-disorders/otitis-externa/otitis-externa-in-animals' },
    relatedSlugs: ['pet-pain-signs', 'indoor-cat-parasites', 'dog-vomiting'],
  },
];

export const knowledgeArticleMap = new Map(
  knowledgeArticles.map((article) => [article.slug, article]),
);
