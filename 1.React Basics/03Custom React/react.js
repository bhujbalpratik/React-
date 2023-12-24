const customRender = (Element, Container) => {
  //   const domElement = document.createElement(Element.type);

  //   domElement.innerHTML = Element.children;

  //   domElement.setAttribute("href", Element.props.href);

  //   domElement.setAttribute("target", Element.props.target);

  //   Container.appendChild(domElement);

  const domElement = document.createElement(Element.type);
};

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Visit Google",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
