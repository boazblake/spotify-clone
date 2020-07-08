export const Paginator = () => {
  return {
    view: ({ attrs: { state, fetchDataFor } }) => {
      let total = state.total / state.limit
      let current = state.offset / state.limit
      let range = [...Array(total).keys()].slice(1)
      return m(
        "ul.pagination",
        range.map((page) => {
          return m(
            `li.page-item ${page == current && "active"}`,
            m(".page-link active", { onclick: (e) => fetchDataFor(page) }, page)
          )
        })
      )
    },
  }
}
