/*
 * @Descripttion: ZJJ Code
 * @version: 1.0.0
 * @Author: ZJJ
 * @Date: 2023-12-06 23:02:01
 * @LastEditors: ZJJ
 * @LastEditTime: 2024-02-28 20:47:44
 */
import {SidebarConfig4Multiple} from "vuepress/config";

import roadmapSideBar from "./sidebars/roadmapSideBar";
// @ts-ignore
export default {
    "/Cracking Leetcode/": roadmapSideBar,
    // 降级，默认根据文章标题渲染侧边栏
    "/": "auto",
} as SidebarConfig4Multiple;
