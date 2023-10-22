<template>
  <h2>任务列表</h2>
  <div>
    <ul>
      <li v-for="item in task.taskList" :key="item.id">
        <div class="name">{{ item.name }}</div>
        <div class="desc">{{ item.taskDesc }}</div>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { task } from "../../model/task";

const taskList = task.taskList = [
  {
    id: "22",
    name: "收集通过搜索引擎获取的图片",
    taskDesc: "整理来自搜索引擎获取的图片",
    taskType: task.taskType.imageCollection,
    taskStatus: task.taskStatus.noStart,
    taskTag: task.taskTag.urgent
  }
];
</script>
