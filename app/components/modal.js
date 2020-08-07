export const Modal = () => {
  return {
    view: ({ children }) => {
      return m(
        ".modal",
        m(
          ".modal-container",
          children.map((child) =>
            m(".modal.full-width", [
              m(".modal-header", child.header),
              m(".modal-body", child.body),
              m(".modal-footer", child.footer),
            ])
          )
        )
      )
    },
  }
}
