// 任务类型
enum taskType {
  reading = 1, // 阅读
  video = 2, // 剪辑视频
  sound = 3, // 声音合成
  article = 4, // 制作文案
  imageProcessing = 5, // 图片处理
  imageCollection = 6 // 图片收集
}

// 任务状态
enum taskStatus {
  noStart = 0, // 未开始
  active = 1, // 进行中
  stop = 2, // 已停止
  finish = 3, // 已完成
  cancel = 4 // 已取消
}

// 任务标记
enum taskTag {
  suspended = 1, // 暂缓
  urgent = 2, // 紧急
  slow = 3, // 缓慢
  quick = 4 // 快速
}

// 图片来源渠道
enum imageSourceChannel {
  google = 1, // 谷歌
  baidu = 2, // 百度
  xhs = 3, // 小红书
  douban = 4 // 豆瓣网
}

// 任务
type task = {
  id: string,
  name: string;
  taskDesc: string;
  taskType: number;
  taskStatus: number;
  taskTag: number;
};

let taskList: task[];

// taskList = [
//     {
//         name: "收集通过搜索引擎获取的图片",
//         taskDesc: "整理来自搜索引擎获取的图片",
//         taskType: taskType.imageCollection,
//         taskStatus: taskStatus.noStart,
//         taskTag: taskTag.
//     }
// ]

export const task = {
  taskType,
  taskStatus,
  taskTag,
  imageSourceChannel,
  taskList
};
