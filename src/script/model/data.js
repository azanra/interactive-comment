import juliomoPng from "../../asset/resource/avatars/image-juliusomo.png";
import amyPng from "../../asset/resource/avatars/image-amyrobson.png";
import maxPng from "../../asset/resource/avatars/image-maxblagun.png";
import ramPng from "../../asset/resource/avatars/image-ramsesmiron.png";

export const initialData = {
  currentUser: {
    image: {
      png: juliomoPng,
    },
    username: "juliusomo",
  },
  comments: {
    1: {
      id: 1,
      content:
        "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      createdAt: "Wed Aug 11 2025 07:42:06 GMT+0700 (Western Indonesia Time)",
      score: 12,
      user: {
        image: {
          png: amyPng,
        },
        username: "amyrobson",
      },
      replies: [],
      type: "comment",
    },
    2: {
      id: 2,
      content:
        "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      createdAt: "Wed Feb 17 2025 07:42:06 GMT+0700 (Western Indonesia Time)",
      score: 5,
      user: {
        image: {
          png: maxPng,
        },
        username: "maxblagun",
      },
      replies: [4, 5],
      type: "comment",
    },
    3: {
      id: 3,
      content: "Nice one",
      createdAt: "Wed Jun 15 2025 07:42:06 GMT+0700 (Western Indonesia Time)",
      score: 3,
      user: {
        image: {
          png: juliomoPng,
        },
        username: "juliusomo",
      },
      replies: [],
      type: "comment",
    },
    4: {
      id: 4,
      content:
        "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
      createdAt: "Wed Jun 01 2025 07:42:06 GMT+0700 (Western Indonesia Time)",
      score: 4,
      replyingTo: "maxblagun",
      parent: 3,
      user: {
        image: {
          png: ramPng,
        },
        username: "ramsesmiron",
      },
      replies: [6],
      type: "replies",
    },
    5: {
      id: 5,
      content:
        "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
      createdAt: "Wed Jun 07 2025 07:42:06 GMT+0700 (Western Indonesia Time)",
      score: 3,
      replyingTo: "ramsesmiron",
      parent: 3,
      user: {
        image: {
          png: juliomoPng,
        },
        username: "juliusomo",
      },
      replies: [],
      type: "replies",
    },
    6: {
      id: 6,
      content: "Agreed!!!",
      createdAt: "Wed Jun 10 2025 07:42:06 GMT+0700 (Western Indonesia Time)",
      score: 4,
      replyingTo: "ramsesmiron",
      parent: 4,
      user: {
        image: {
          png: amyPng,
        },
        username: "amyrobson",
      },
      replies: [],
      type: "replies",
    },
  },
};
