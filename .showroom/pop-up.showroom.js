export default {
  component: 'pop-up',
  path: '/src/pop-up.js',
  attributes: {
    open: false
  },
  functions: {
    open: () => showroom.component.open(),
    close: () => showroom.component.close()
  },
  innerHTML: /*html*/`
    <style>
      #content {
        width: 200px;
        height: 150px;
      }
    </style>
    <div id="content">
      Hello i am the content
    </div>
  `
}