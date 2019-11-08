/* TagCloud(container, texts, options);
 - container: 容器元素选择器
 - texts: 文本列表
 - options: 配置项 [可选] (默认值 {
    radius: 100,         // 滚动半径, 单位px
    maxSpeed: 'normal',  // 滚动最大速度, 取值: slow, normal(默认), fast
    initSpeed: 'normal', // 滚动初速度, 取值: slow, normal(默认), fast
    direction: 135,      // 初始滚动方向, 取值角度(顺时针deg): 0 对应 top, 90 对应 left, 135 对应 right-bottom(默认)...
    keep: true,          // 鼠标移出组件后是否继续随鼠标滚动, 取值: false, true(默认) 对应 减速至初速度滚动, 随鼠标滚动
 })
 */
TagCloud(".cloud",
   ["hello", "test", "adrien", "hello", "test", "adrien", "hello",
      "test", "adrien", "hello", "test", "adrien", "hello", "test", "adrien",
      "adrien", "hello", "test", "adrien", "hello", "test", "adrien", "hello"],
   {
      radius: 250,
      initSpeed: 'normal',
      maxSpeed: 'fast',
      keep: false
   });


   GitHubCalendar(".calendar", "Mrgove10", { responsive: true });