<template>
  <h2>任务列表</h2>
  <div>
    <ul>
      <li v-for="item in taskList" :key="item.id">
        <div class="name">{{ item.name }}</div>
        <div class="desc">{{ item.taskDesc }}</div>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, watch, onMounted } from "vue";
import { task } from "../../model/task";

let taskList = ref<task.taskList>([]);
watch(
  taskList,
  () => {
    console.log("taskList变化了");
  }
);
taskList.value = [
  {
    id: "22",
    name: "收集通过搜索引擎获取的图片",
    taskDesc: "整理来自搜索引擎获取的图片",
    taskType: task.taskType.imageCollection,
    taskStatus: task.taskStatus.noStart,
    taskTag: task.taskTag.urgent
  }
];

onMounted(() => {
  console.log(26, taskList);
  setTimeout(() => {
    console.log(111);
    taskList.value.push({
      id: "23",
      name: "收集通过门户网站获取的图片",
      taskDesc: "整理来自门户网站获取的图片",
      taskType: task.taskType.imageCollection,
      taskStatus: task.taskStatus.noStart,
      taskTag: task.taskTag.urgent
    });
  }, 2000);
});
</script>
