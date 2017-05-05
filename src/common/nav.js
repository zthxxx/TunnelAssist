
let nav = [
  {
    title: '配筋计算',
    list: [
      {
        title: 'A 顶板',
        value: '配筋-顶板',
        to: {name: 'bar-top'}
      },
      {
        title: 'B 底板',
        value: '配筋-底板',
        to: {name: 'bar-bottom'}
      },
      {
        title: 'C 侧板',
        value: '配筋-侧板',
        to: {name: 'bar-side'}
      }
    ]
  },
  {
    title: '荷载计算',
    list: [
      {
        title: 'A 顶板',
        value: '荷载-顶板',
        to: {name: 'load-top'}
      },
      {
        title: 'B 底板',
        value: '荷载-底板',
        to: {name: 'load-bottom'}
      },
      {
        title: 'C 侧板',
        value: '荷载-侧板',
        to: {name: 'load-side'}
      }
    ]
  }
];

export default nav
