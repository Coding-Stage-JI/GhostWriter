const Data = [
  {
    category: "면담",
    details: [
      {
        name: "휴학 상담",
        type: "NO",
        title: `[휴학 상담] 휴학 처리 절차 중 지도교수님 상담 관련 문의드립니다.`,
        content: [
          `다름이 아니라, 제가 더 많은 기회를 얻고자 /* 휴학에 하는 이유 */ 을 위해 휴학을 계획하고 있습니다.
          생각 중인 휴학 기간은 /* 0000년 0학기부터 0000년 0학기까지 */ 입니다.
          바쁘시겠지만 교수님과 휴학상담을 받을 수 있는지 문의드립니다.
        저는 /* 날짜나 특정 시간대 */를 제외하고는 언제든 가능합니다.
        교수님께서 가능하신 날짜 및 시간대를 알려주시면 제가 해당 시간에 찾아뵙도록 하겠습니다.
        `,
        ],
      },
      {
        name: "진로 상담",
        type: "NO",
        title: `[진로 상담] ~~~`,
        content: [`@@@@@@@`],
      },
    ],
  },
  {
    category: "성적 문의",
    details: [
      {
        name: "과제/시험 성적 문의",
        type: "YES",
        title: `[성적 문의] SUBJECT 과목 /* 00과제/중간고사/기말고사/퀴즈 */ 성적 문의드립니다.`,
        content: [
          `다름이 아니라, 저는 SUBJECT 과목 /* 00과제/중간고사/기말고사 */에 최선을 다했습니다.
    그러나 성적을 확인해보니 /* 00점 */ 감점된 것을 알았습니다.
    혹시 어떤 부분에서 감점된 것인지 알 수 있을까요? 
    말씀해주신 내용을 참고하여 앞으로의 수업 및 공부를 더 보완하고 싶습니다.
    `,
          `다름이 아니라, 저는 SUBJECT 과목 /* 00과제/중간고사/기말고사/퀴즈 */에 최선을 다했습니다.
    그러나 성적을 확인해보니 제가 예상한 것보다 낮아 어떤 부분이 부족했는지 알고 싶어 메일 드렸습니다.
    혹시 제가 어떤 부분에서 부족했는지 알 수 있을까요?
    제가 어떤 부분이 부족했는지 알려주신다면, 참고하여 공부 방법을 개선하고자 합니다.    
    `,
    `다름이 아니라, 이번 성적에 관련하여 문의드리고 싶은 부분이 있어 연락드리게 되었습니다.
    교수님의 수업을 경청하며 최선을 다해 시험에 임했으나, 제가 예상했던 바와 다소 다른 결과가 나왔습니다.
    제가 어떤 부분이 부족했는지 알려주신다면, 참고하여 학업에 정진하고자 합니다.
    `
        ],
      },
      {
        name: "학기 성적 문의",
        type: "YES",
        title: `[학점 문의] SUBJECT 과목 학점 문의드립니다.`,
        content: [
          `다름이 아니라, 이번 학기 SUBJECT 과목을 수강하는데 있어서 최선을 다했습니다.
            그럼에도 예상한 것보다 다소 낮은 성적을 받은 것 같아서 어떤 부분이 부족했는지 알고 싶어 메일 드렸습니다.
            이후 학업 과정에 참고하여 보완하고자 하니, 바쁘시겠지만 다시 한번 검토하여 알려주시면 감사하겠습니다.
            `,
            `다름이 아니라, 이번 성적에 관련하여 문의드리고 싶은 부분이 있어 연락드리게 되었습니다.
    교수님의 수업을 경청하며 최선을 다해 시험에 임했으나, 제가 예상했던 바와 다소 다른 결과가 나왔습니다.
    제가 어떤 부분이 부족했는지 알려주신다면, 참고하여 학업에 정진하고자 합니다.
    `
        ],
      },
      {
        name: "평균/표준편차 문의",
        type: "YES",
        title: `[평균 문의] SUBJECT 과목 /* 중간고사/기말고사 */ 평균 문의드립니다.`,
        content: [
          `다름이 아니라, 이번 /* 중간고사/기말고사 */에서 제가 어느정도에 위치해있는지 궁금해서 메일 드렸습니다.
            혹시 가능하시다면 평균과 표준편차, 중간값을 공지해 주실 수 있나요?
            `,
        ],
      },
    ],
  },
  {
    category: "수업 관련 질문",
    details: [
      {
        name: "수업 내용 질문",
        type: "YES",
        title: "[수업 질문] SUBJECT 과목 수업 내용 질문드립니다.",
        content: [
          `수업 내용을 복습하던 중 궁금한 점이 생겨 메일 드립니다.

                /* (예시)
                1. (4장 22쪽) analog signal, digital signal 상관없이 TP, coaxial cable, optical fiber 모두 타고 갈 수 있는건가요? 아니면 코덱이나 모뎀을 사용해 한 종류의 signal로 맞춰줘야하나요? 
2. (4장 38쪽) direct link와 point to point의 차이가 뭔가요? point to point는 두 host가 direct link로 연결된 것이므로 direct link의 더 좁은 의미라고 생각하면 될까요?
3. (4장 56쪽) 안테나 종류에는 isotropic, omnidirectional, directional antenna가 있고 이 안테나들을 사용하는 방식의 종류에 위성통신, 지상통신이 있는건가요? 즉, parabolic 안테나를 사용해 위성통신, 지상통신 모두 구현이 가능한가요? 그리고 omnidirectional 안테나로 지상통신 및 위성통신으로 wifi, cellular 통신을 지원하는 것인가요?
                */
               `,
        ],
      },
      {
        name: "과제 내용 질문",
        type: "YES",
        title: `[과제 질문] SUBJECT 과목 /* 00과제 */ 관련하여 질문드립니다.`,
        content: [
          `/* 00과제 */에 질문이 생겨 메일 드립니다.

    /* (예시)
과제5에서 리포트를 1500단어 이내로 쓰라고 되어있는데, 혹시 appendices도 포함해서 카운트해야 할까요?
과제 설명에 나와있는 꼭 필요한 것들만 넣었다고 생각했는데, appendices를 포함하면 1700단어 넘게 나와서 문의드립니다.
*/
`,
        ],
      },
      {
        name: "과제 늦제출",
        type: "YES",
        title: `[과제 늦제출] SUBJECT 과목 /* 00과제 */ 제출에 대해서 문의드립니다.`,
        content: [
          `다름이 아니라, 죄송하지만 /* 과제를 못 한 사유 */로 인해 부득이하게 과제를 제때 제출하지 못했습니다.
          혹시 지금이라도 메일로 제출해도 되는지 문의드립니다.
          `,
          `다름이 아니라, 제가 과제를 급하게 하다가 마감 시간을 지키지 못했습니다.
          지각 제출을 하려고 했으나, 사이버캠퍼스의 과제함이 닫혀버려 제출하지 못하는 상황입니다.
          혹시 지금이라도 메일로 과제를 제출해도 될까요?
          다음부터는 꼭 시간을 갖고 과제를 하도록 하겠습니다.
          `,
          `다름이 아니라, 제가 과제를 급하게 하다가 마감 시간을 지키지 못했습니다.
          지각 제출을 하려고 했으나, 사이버캠퍼스의 과제함이 닫혀버려 아예 제출하지 못했습니다.
          이에 과제 파일을 첨부하여 메일 드립니다.

          그리고 혹시 지각 제출은 몇 퍼센트 감점인지 알 수 있을까요?
          `
        ],
      },
    ],
  },
  {
    category: "출결 문의",
    details: [
      {
        name: "병결",
        type: "YES",
        title: `[출결 문의] SUBJECT 과목 병결 처리 문의드립니다.`,
        content: [
          `다름이 아니라, 제가 코로나 확진으로 인하여 /* 00월 00일부터 00월 00일 */까지 자가격리를 하게 되었습니다.
            이 기간 동안의 수업을 온라인으로 참여하거나, 출석 인정 처리를 받을 수 있을까요?
            코로나 확진 문자 사진 메일에 첨부합니다.
            `,
          `다름이 아니라, 제가 /* 건강 악화로/~~~으로 */ 인해 병원에 입원을 하게 되었습니다. 
            이로 인해 /* 00월 00일 */에 수업 참여가 어려울 것 같습니다.
            혹시 입원 진단서를 제출한다면 출석 인정 처리를 받을 수 있을까요?
            `,
          `제가 급격한 몸 상태의 악화로 응급실에 가게 되어, /* 00월 00일 */ 수업에 참여하지 못했습니다.
            혹시 이에 대한 진단서 등을 제출하면 출석 인정 처리를 받을 수 있는지 문의드립니다.
            `,
        ],
      },
      {
        name: "행사 참석",
        type: "YES",
        title: `[출결 문의] SUBJECT 과목 출결 문의 드립니다.`,
        content: [
          `다름이 아니라, 학과에서 진행하는 /* 00행사 */ 참여로 /* 00월 00일 */ 수업에 참여하기 어려울 것 같습니다.
            학과 사무실에 문의한 결과, 참여 확인서를 발급받을 수 있다고 합니다.
            혹시 이 서류를 제출하면 출석 인정이 가능한지 문의드리고자 합니다.
            `,
          `다름이 아니라, /* 00월 00일 */에 저희 학과 필수 참여 행사가 있어, 수업에 참여하지 못했습니다.
            학과 사무실에서 참석 확인서를 발급받았는데, 제출 시 출석 인정이 가능한지 문의드립니다.
            미리 말씀드리지 못한 점 죄송하다는 말씀드리며, 출석 인정 처리가 가능하다면 서류 제출하도록 하겠습니다.
            `,
          `다름이 아니라, /* 00월 00일 */에 회사 면접으로 인하여 부득이하게 수업 참석이 어려울 것 같습니다.
            시간을 조정해 보려고 했으나, 인사팀에 문의한 결과 면접 날짜 조정이 어렵다는 답변을 받았습니다.
            혹시 관련 서류를 준비해 제출한다면 출석 인정이 가능할까요?
            확인 부탁드리겠습니다.
            `,
        ],
      },
    ],
  },
  {
    category: "기타",
    details: [
      {
        name: "추천서 요청",
        type: "NO",
        title: `[추천서 요청] 추천서 관련하여 문의 드립니다.`,
        content: [
          `다름이 아니라, 제가 이번 /* 00기업/00대학/00재단 */에서 진행하는 /* 00장학금 */을 받기 위해, 교수님의 추천서가 필요하게 되었습니다.
            /*
            (본인에 대한 소개, 장학금을 받아야 하는 이유, 교수님의 추천서가 필요한 이유 등의 내용)
            */
           관련 서류는 메일에 같이 첨부하였습니다.
           확인 부탁드립니다.
            `,
          `다름이 아니라, 제가 /* 00대학원 00학과 */에 진학하기 위해, 교수님께 추천서를 부탁드리고자 메일을 드렸습니다.
            /*
            (본인에 대한 소개, 해당 대학원에 진학하고자 하는 이유, 교수님의 추천서가 필요한 이유 등의 내용)
            */
            관련 서류는 메일에 같이 첨부하였습니다.
            확인 부탁드립니다.
            `,
        ],
      },
      {
        name: "증원 요청",
        type: "YES",
        title: `SUBJECT 과목 증원 관련 문의 드립니다.`,
        content: [
          `다름이 아니라, 교수님께서 이번 /* 0000-0학기 */ 진행하시는 SUBJECT 과목을 듣고자 수강신청을 시도했으나 안타깝게도 정원에 들지 못하였습니다.
          이에 대해 혹시 수강 인원 증원이 가능한지 문의하고자 메일을 드립니다. 
          이번 학기에 SUBJECT 과목을 수강하지 못하면 추가학기를 다녀야 하는 상황이라 증원을 꼭 한번 고려해 주시면 정말 감사드리겠습니다.
          `,
          `다름이 아니라, 교수님께서 이번 /* 0000-0학기 */ 진행하시는 SUBJECT 과목을 듣고자 수강신청을 시도했으나 안타깝게도 정원에 들지 못하였습니다.
          이에 대해 혹시 수강 인원 증원이 가능한지 문의하고자 메일을 드립니다. 
          제가 평소에 /* 00분야 */에 관심이 많아, 이번 학기 교수님의 SUBJECT 과목을 꼭 듣고 싶습니다.
          수강 인원 증원을 꼭 한번 고려해 주시면 정말 감사드리겠습니다.
          `
        ],
      },
      {
        name: "기타",
        type: "NO",
        title: "/* 메일 목적에 대해 간단히 작성 */",
        content: [
          `/* 직접 작성 */`
        ],
      },
    ],
  },
];

const Ending=[
  `바쁘신 와중에 시간 내주셔서 감사합니다.`,
  `다음 수업 때 뵙겠습니다.
  감사합니다.`,
  `메일 읽어주셔서 감사합니다.`,
  `코로나19 조심하시길 바랍니다.`,
  `한 학기 동안 유익한 수업 감사합니다.`,
  `언제나 유익한 수업 감사합니다.`,
  `주말에 메일 드려서 죄송하고, 읽어주셔서 감사합니다.`,
  `좋은 주말 보내세요.
  감사합니다.`,
]

export { Data,Ending };
