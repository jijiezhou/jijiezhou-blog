/*
 * @Descripttion: ZJJ Code
 * @version: 1.0.0
 * @Author: ZJJ
 * @Date: 2023-12-06 23:02:01
 * @LastEditors: ZJJ
 * @LastEditTime: 2024-02-28 21:27:18
 */
import {SidebarConfig4Multiple} from "vuepress/config";

import roadmapSideBar from "./sidebars/roadmapSideBar";
import leetcodeSideBar from "./sidebars/leetcodeSideBar";
// @ts-ignore
export default {
    "/Cracking_Leetcode/": leetcodeSideBar,
    "/学习路线/": roadmapSideBar,
    // 降级，默认根据文章标题渲染侧边栏
    "/": "auto",
} as SidebarConfig4Multiple;
