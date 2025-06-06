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
  comments: [
    {
      id: 1,
      content:
        "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      createdAt: "1 month ago",
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
    {
      id: 2,
      content:
        "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      createdAt: "2 weeks ago",
      score: 5,
      user: {
        image: {
          png: maxPng,
        },
        username: "maxblagun",
      },
      replies: [3, 4],
      type: "comment",
    },
    {
      id: 3,
      content:
        "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
      createdAt: "1 week ago",
      score: 4,
      replyingTo: "maxblagun",
      parent: 2,
      user: {
        image: {
          png: ramPng,
        },
        username: "ramsesmiron",
      },
      replies: [5],
      type: "replies",
    },
    {
      id: 4,
      content:
        "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
      createdAt: "2 days ago",
      score: 2,
      replyingTo: "ramsesmiron",
      parent: 2,
      user: {
        image: {
          png: juliomoPng,
        },
        username: "juliusomo",
      },
      replies: [],
      type: "replies",
    },
    {
      id: 5,
      content: "shutup",
      createdAt: "1 week ago",
      score: 4,
      replyingTo: "ramsesmiron",
      parent: 3,
      user: {
        image: {
          png: ramPng,
        },
        username: "retard",
      },
      replies: [],
      type: "replies",
    },
  ],
};
