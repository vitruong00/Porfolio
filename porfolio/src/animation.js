import styled from "styled-components";

export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.5,
    },
  },
};

export const titleAnim = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.5 },
  },
};

export const photoAnim = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

export const lineAnim = {
  hidden: { width: "0%" },
  show: {
    width: "100%",
    transition: { duration: 0.8 },
  },
};

export const slider = {
  hidden: { x: "-130%", skew: "45deg" },
  show: {
    x: "100%",
    skew: "0deg",
    transition: { ease: "easeOut", duration: 1 },
  },
};

export const sliderContainer = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, ease: "easeOut" },
  },
};

export const ImageAnimation = styled.div`
  .image-animation {
    @media (max-width: 500px) {
      width: 70%;
    }
  }

  #React-Icon {
    animation: React-Icon 1s ease infinite alternate;
    transform-origin: bottom;
  }

  @keyframes React-Icon {
    from {
      transform: rotateY(30deg);
    }
    to {
      transform: rotateX(-15deg);
    }
  }

  #Angular-Icon {
    animation: Angular-Icon 1s ease infinite alternate;
  }

  @keyframes Angular-Icon {
    from {
      transform: translateY(0%);
    }
    to {
      transform: translateY(-5%);
    }
  }

  #jQuery {
    animation: jQuery 1s ease infinite alternate;
  }

  @keyframes jQuery {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-8%);
    }
  }

  #View {
    animation: View 1s ease infinite alternate;
  }

  @keyframes View {
    from {
      transform: translateY(0%);
    }
    to {
      transform: translateY(-5%);
    }
  }

  #Book {
    animation: Book 1s ease infinite alternate;
    transform-origin: bottom;
  }

  @keyframes Book {
    from {
      transform: rotateY(30deg);
    }
    to {
      transform: rotateX(-20deg);
    }
  }

  #Tree {
    animation: Tree 1s ease infinite alternate;
  }

  @keyframes Tree {
    from {
      transform: translateY(0%);
    }
    to {
      transform: translateY(-10%);
    }
  }
`;

export const ContactAnimation = styled.div`
  .image-animation {
    @media (max-width: 500px) {
      width: 70%;
    }
  }

  #head1 {
    animation: head1 1s ease infinite alternate;
    transform-origin: bottom;
  }

  @keyframes head1 {
    from {
      transform: translateX(-5%);
    }
    to {
      transform: translateX(5%);
    }
  }

  #head2 {
    animation: head2 1s ease infinite alternate;
    transform-origin: bottom;
  }

  @keyframes head2 {
    from {
      transform: rotateY(10deg);
    }
    to {
      transform: rotateX(-20deg);
    }
  }

  #head3 {
    animation: head3 1s ease infinite alternate;
    transform-origin: bottom;
  }

  @keyframes head3 {
    from {
      transform: translateX(5%);
    }
    to {
      transform: translateX(-5%);
    }
  }
`;
