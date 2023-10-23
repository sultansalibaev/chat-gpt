<template>
    <!-- ChatGPT -->
    <div
        class="delete-resource-modal"
        style="z-index: 999999999999999999999;"
        v-show="chatgpt_item"
        @click.stop="chatgpt_item = null"
    >
        <div class="flex flex-col chat-gpt-modal relative bg-white" @click.stop :class="{
            'ml-[-110px]': chatgpt_tab != 'MadeRequests'
        }">
            <div class="modal-content h-full">
				<div class="modal-header bg-primary b-r-0" style="height: 49px;" :style="chatgpt_tab != 'MadeRequests' ? 'width: calc(100% + 220px);' : ''">
					<div class="col-lg-12 p-0">
						<h3 class="f-l m-0">Анализ ChatGPT</h3>
						<button class="close btn absolute" data-dismiss="modal" @click.stop="chatgpt_item = null" style="font-size: 20px !important; text-shadow: none; line-height: 20px; opacity: 1; color: #fff; right: 0px;top: 0px">
							<i class="fa fa-close"></i>
						</button>
					</div>
				</div>
				<div class="tab-content-container">
                    <div class="tab-head" style="margin: 14px 17px 0;overflow: hidden;height: 0;">
                        <div class="w-1/2 flex">
                            <div class="tab-item inline-block" @click="chatgpt_tab = 'MadeRequests'" :class="{
                                selected: chatgpt_tab == 'MadeRequests'
                            }">Проделанные запросы</div>
                        </div>
                        <div class="tab-item" @click="chatgpt_tab = 'TextAnalyze'" :class="{
                            selected: chatgpt_tab == 'TextAnalyze'
                        }">Анализ новости</div>
                        <div class="tab-item" @click="chatgpt_tab = 'TextReaction'" :class="{
                            selected: chatgpt_tab == 'TextReaction'
                        }">Свой запрос</div>
                    </div>
                    <div class="tab-content" style="margin: 0px 17px !important;height: 90%;" :style="{
                        padding: chatgpt_tab != 'TextReaction' ? '14px 17px' : '0'
                    }">
                        <TextReaction />
                    </div>
				</div>
			</div>
        </div>
    </div>
</template>

<script>

import TextReaction from "@/components/TextReaction.vue"

import { chatgpt_item, chatgpt_tab } from '@/use/data/index'

export default {
    components: {
        TextReaction,
    },
    setup() {
        return { chatgpt_item, chatgpt_tab };
    },
}

</script>

<style>
.items {
    display: flex;
    flex-wrap: wrap;
    padding: 0 2.5px;
}

.item-container {
    width: 50%;
    padding: 0 7.5px;
    margin-bottom: 15px;
}
.item {
    height: 100%;
    background: white;
    padding: 10px 15px;
    padding-top: 8px;
    display: flex;
    flex-direction: column;
    position: relative;
    box-shadow: 0 0 7px #7f7f7f59;
    border-radius: 4px;
}
.m-b-10 {
    margin-bottom: 10px;
}
.item-title__icon {
    margin-right: 8px;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    min-width: 40px;
    cursor: pointer;
}
.item-title__text {
    /* padding-top: 7px; */
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.item-title__menu {
    cursor: pointer;
    border: 1px solid #e7eaec;
    border-radius: 50%;
    display: flex;
    height: 30px;
    min-width: 30px;
    position: relative;
    margin-top: 6px;
    position: relative;
}
.item-title__menu:hover {
    background: #e7eaecbe;
}
.item-title__menu:active {
    background: #c9cccebe;
}
.item-title__menu .fa-ellipsis-vertical {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
}
.item-info {
    font-size: 12px;
}
.item-resource {
    color: #2d9cdb;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 25ch;
    height: 13px;
    margin-bottom: -1px;
}
.item-resource:hover {
    color: #306ea4;
    /* color: #23527c; */
    text-decoration: underline;
}
.item-date {
    color: #676a6c;
    cursor: pointer;
}
.hover-underline:hover {
    text-decoration: underline;
}

.item-content {
    text-align: justify;

    max-height: 80px;
    line-height: 20px;
    overflow: hidden;

    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
}
.item-btns {
    flex-grow: 1;
    justify-content: space-between;
    align-items: end;
}
.favorites {
    border: 1px solid #e7eaec;
    font-size: 15px;
    height: 29px;
    padding: 0 8px;
    border-radius: 3px;
    transition: 0.25s;
    white-space: nowrap;
    user-select: none;
}
.favorites:hover {
    background: #e7eaec70;
}
.favorites:active {
    background: #e7eaec;
}
.item-sentiment {
    border: 1px solid #e7eaec;
    font-size: 15px;
    height: 29px;
    padding: 0 8px;
    border-radius: 3px;
    color: white;
}
.item-sentiment_1 {
    background: #1bb394;
}
.item-sentiment_0 {
    background: #f2c94c;
}
.item-sentiment_-1 {
    background: #ec5d5d;
}

.nav-pagination {
    margin-left: auto;
    display: flex;
    height: 28px;
    align-items: center;
    padding: 0 4px;
    position: relative;
    z-index: 5;
    user-select: none;
}
.nav-pagination span {
    background: white;
    padding: 0 7px;
    padding-top: 1px;
    cursor: pointer;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.nav-pagination span:hover,
.nav-pagination span.active {
    border-bottom: 1px solid #3b5998;
    color: #3b5998;
    font-weight: 600;
}

.result-count {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif ;
    font-size: 15px;
    font-weight: 600;
}

.result-count__items {
    color: #1cb394;
}
.result-count__resource {
    color: #7cb5ec;
}

.nav-pagination i {
    font-size: 16px;
    font-weight: 600;
    background: white;
    height: 28px;
    width: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.15s;
}

.nav-pagination i:hover {
    color: white;
    background: #3b5998;
}

.first-page.icon-w-0 {
    margin-left: 0;
}

.first-page {
    margin-right: 3px;
    border-radius: 4px 0 0 4px;
}

.second-page {
    margin-left: 3px;
    border-radius: 0 4px 4px 0;
}

.hovered-angle {
    display: flex;
    align-items: center;
}

.hovered-angle:hover .border-radius-0 {
    border-radius: 0;
}

.icon-w-0 {
    overflow: hidden;
}

.hovered-angle:not(.hovered-angle:hover) .first-page.icon-w-0 {
    margin-left: 22px;
}
.hovered-angle:not(.hovered-angle:hover) .icon-w-0 {
    width: 0;
}

.hovered-angle:not(.hovered-angle:hover) .fa-angle-right + .icon-w-0 {
    margin-right: 22px;
}

.sentiment {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
}

.item-sentiments i {
    font-size: 22px;
    cursor: pointer;
    transition: 0.15s;
    opacity: 0.25;
}

.item-sentiments i.checked-btn,
.item-sentiments i:hover {
    opacity: 1;
    /* font-size: 27px; */
    transform: scale(1.3);
    margin-bottom: -1px;
}
i.negative {
    background: transparent;
    color: #ec5d5d;
}
i.neutral {
    background: transparent;
    color: #f2c94c;
}
i.positive {
    background: transparent;
    color: #1bb394;
}

.item-sentiments i:not(.item-sentiments i:last-child) {
    margin-right: 7px;
}
.item-modal {
    position: absolute;
    right: 0;
    top: calc(100% + 10px);
    background: white;
    padding: 3px;
    border-radius: 4px;
    border: 1px solid #e7eaec;
    transition: 0.15s;
    opacity: 0;
    user-select: none;
}
.item-modal:not(.item-modal.active) {
    pointer-events: none;
}
.item-modal.active {
    opacity: 1;
}
.item-action i {
    margin-right: 11px;
}
.item-action {
    display: flex;
    align-items: center;
    height: 30px;
    padding: 0 10px;
    white-space: nowrap;
    border-radius: 3px;
}
.item-action:hover {
    background: #f5f5f5;
}

#project_news .fa-globe,
#project_news .fa-newspaper-o,
#project_news .fa-vk,
#project_news .fa-facebook-square,
#project_news .fa-twitter,
#project_news .fa-telegram,
#project_news .fa-google-plus,
#project_news .fa-youtube-play,
#project_news .fa-odnoklassniki-square {
    font-size: 20px;
    vertical-align: text-bottom;
}

#project_news .fa-instagram,
#project_news .fa-at,
.publication_news .fa-instagram,
.publication_news .fa-at {
    border-radius: 5px;
    font-size: 16px;
    color: #fff;
    width: 19px;
    height: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: text-bottom;
}
#project_news .fa-globe {
    color: #1ab394;
}
#project_news .fa-newspaper-o {
    color: #785f50;
}
#project_news .fa-vk {
    color: #4a76a8;
}
#project_news .fa-facebook-square {
    color: #4267b2;
}
#project_news .fa-telegram {
    color: #1da1f2;
}
#project_news .fa-twitter {
    color: #1da1f2;
}
#project_news .fa-instagram {
    background: linear-gradient(#a900ff, #ea3701, #ec920b);
}
#project_news .fa-google-plus {
    color: #4a76a8;
}
#project_news .fa-youtube-play {
    color: #ff0000;
}
#project_news .fa-odnoklassniki-square {
    color: #ee8208;
}
#project_news .fa-at {
    background: #5a90ce;
    color: #ee8208;
    vertical-align: text-bottom;
}
#project_news .fa-tiktok {
    background: #000;
    color: #fff;
    width: 20px;
    display: flex;
    height: 20px;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    border-radius: 4px;
    padding-top: 1.3px;
}

.favorites-modal {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    top: 0;
    overflow: hidden;
    /* transition: .15s; */
    height: 100%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: #00000078 !important;
}
.favorites-modal:not(.favorites-modal.active) {
    display: none;
    /* height: 0;
    padding: 0 !important; */
}

.favorite-search {
    min-height: 30px;
    background: #e7eaec;
    border-radius: 3px;
}

.favorite-search .fa-search {
    padding: 0 10px;
    color: #a7b1c2;
}

.favorite-search input {
    width: 100%;
    background: #e7eaec;
    height: 100%;
    font-size: 16px;
}

.favorite-search input:focus {
    outline: none;
}

.favorites-modal-close {
    font-size: 21px;
    padding: 0 4px;
    margin-left: 5px;
    background: red;
    height: 26px;
    width: 26px;
    display: flex;
    align-items: center;
    color: white;
    justify-content: center;
    border-radius: 3px;
}
.favorite-list {
    overflow: hidden;
    overflow-y: scroll;
    height: calc(100% - 109px);
    user-select: none;
}

.favorite-list::-webkit-scrollbar {
    width: 7px;
    margin-left: 2px;
}

.favorite-list::-webkit-scrollbar-track {
    margin-left: 2px;
    background-color: transparent;
}

.favorite-list::-webkit-scrollbar-thumb {
    /*background-color: #eaeaea;*/
    background-color: rgb(170, 227, 255);
    border-radius: 5px;
}

.favorite input {
    margin-right: 8px;
    height: 16px;
    width: 16px;
    margin-top: 0;
}

.favorite span {
    font-size: 15px;
}

.favorite {
    background: #ccc;
    color: white;
    font-weight: 400;
    padding: 1px 11px 0px 11px;
    border-radius: 12px;
    height: 27px;
    line-height: 1;
    cursor: pointer;
    transition: 0.15s;
}
.favorite.list-labels {
    background: transparent;
    color: #333;
    display: flex !important;
    align-items: center !important;
    height: 24px;
    border-radius: 4px;
    padding: 0 6px;
}

/* .favorite:hover {
    background: #8fa9df;
} */
.favorite:hover {
    background: rgb(28, 179, 148, .4);
}

.favorite:not(.favorite.list-labels).active,
.favorite:not(.favorite.list-labels):active {
    background: #3b5998;
}

/* .favorite-buttons {
    padding-top: 9px;
    border-top: 2px solid #e4e4e4;
} */

.favorite-buttons > input {
    width: 100%;
    border: 1px solid #e4e4e4 !important;
    border-radius: 3px 0px 0px 3px !important;
    border-right: 0px !important;
    padding-left: 9px;
    font-size: 16px;
    outline: none;
}

.favorite-buttons > input {
    outline: none;
}

.favorite-apply {
    font-size: 15px;
    height: 31px;
    padding: 0 8px;
    border-radius: 0 3px 3px 0;
    background: #1bb394;
    color: #fff;
    display: flex;
    align-items: center;
    line-height: 1;
    padding-bottom: 2px;
    transition: 0.15s;
    user-select: none;
}
.favorite-apply:hover {
    background: #169077;
}

.item-favorites-min-height {
    min-height: 236px;
}

.label-color {
    color: rgb(28, 179, 148) !important;
    cursor: pointer;
}

.label-color.label-filter {
    color: #cacccc !important;
    transition: .15s;
}
.label-color.label-filter:hover {
    color: rgba(28,179,148,0.7) !important;
}
.label-color.label-filter.selected,
.label-color.label-filter.selected:hover {
    color: rgb(28, 179, 148) !important;
}

.remove-item-folder {
    margin-left: 4px;
    height: 100%;
    align-items: center;
    display: inline-flex;
    cursor: pointer;
    padding-top: 1px;
}

.close-item-modal {
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px 16px;
    font-size: 23px;
    cursor: pointer;
}

.item-folder {
    cursor: default;
    color: rgb(111, 162, 207);
    border: 1px solid rgb(111, 162, 207);
    border-radius: 3px;
    height: 24px;
    padding: 0 4px;
}

.item-folder span {
    padding-top: 4px;
    padding-bottom: 1px;
    line-height: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: 0.15s;
    max-width: 160px;
}

.item-folder:not(.item-folder:last-child) {
    margin-right: 7px;
}

.item-folder:hover {
    color: white !important;
    background: rgb(111, 162, 207);
}

.item-folders {
    overflow-x: scroll;
    margin: 0 15px;
    margin-bottom: -8px;
    padding-bottom: 2px;
    text-overflow: ellipsis;
}

.item-folders::-webkit-scrollbar {
    /* width: 7px; */
    height: 7px;
    margin-left: 2px;
}

.item-folders::-webkit-scrollbar-track {
    margin-left: 2px;
    background-color: transparent;
}

.item-folders::-webkit-scrollbar-thumb {
    background-color: rgb(170, 227, 255);
    border-radius: 5px;
}

.sort-by-metrics {
    margin-left: auto;
    border-radius: 4px;
    border: 1px solid #3b5998;
}

/* .sort-by-metric:not(.sort-by-metric:last-child) {
    border-right: 1px solid #ccc;
} */
.sort-by-metric.active,
.sort-by-metric:hover {
    background: #3b5998;
    color: #fff;
    fill: #fff;
}
.sort-by-metric.disabled,
.sort-by-metric.disabled:hover {
    background: transparent;
    color: #ccc;
    fill: #ccc;
    cursor: default;
}
.sort-by-metric.disabled:active {
    pointer-events: none;
}
.sort-by-metric {
    padding: 4px 8px;
    font-size: 18px;
    cursor: pointer;
    color: #3b5998;
    fill: #3b5998;
}

.delete-resource-title {
    font-size: 19px;
    background: #ec5e5e;
    color: white;
    padding: 12px;
}

.delete-resource-modal {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    top: 0;
    overflow: hidden;
    /* transition: .15s; */
    height: 100%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: #00000078 !important;
}

.delete-resource-modal > div {
    background: white;
    border-radius: 4px;
    /* overflow: hidden; */
    width: 500px;
    box-shadow: 0 0 11px #ffffff6e;
}
.delete-resource {
    padding: 9px 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.default-btn {
    height: 28px;
    display: flex;
    align-items: center;
    padding: 0 8px;
    border-radius: 4px;
}
.delete-resource-btn {
    background: #ec5e5e;
    color: white;
    margin-left: 12px;
}
.cancel-btn {
    border: 1px solid #ccc;
    margin-left: auto;
}

.full-item-text {
    max-width: 1000px;
    font-size: 16px;
    line-height: 1.3;
    font-weight: 300;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif ;
}
.full-item-text a {
    color: #23527c;
}
.full-item-text a:hover,
.full-item-text a:focus {
    text-decoration: underline;
}

/* Scrollbar */

.scrollbar::-webkit-scrollbar {
    width: 7px;
    margin-left: 2px;
}

.scrollbar::-webkit-scrollbar-track {
    margin-left: 2px;
    background-color: transparent;
}

.scrollbar::-webkit-scrollbar-thumb {
    /*background-color: #eaeaea;*/
    background-color: rgb(170, 227, 255);
    border-radius: 5px;
}

.tab-content::-webkit-scrollbar {
    width: 7px;
    margin-left: 2px;
}

.tab-content::-webkit-scrollbar-track {
    margin-left: 2px;
    background-color: transparent;
}

.tab-content::-webkit-scrollbar-thumb {
    /*background-color: #eaeaea;*/
    background-color: rgb(170, 227, 255);
    border-radius: 5px;
}

.modal-item_btn {
    align-items: center;
    justify-content: center;
    display: inline-flex;
    height: 35px;
    width: 100%;
    min-width: 127px;
    white-space: nowrap;
    max-width: 150px;
    margin: 0 5px;
    color: inherit;
}

.modal-item_btn i {
    margin: 0 5px 0 0;
}

.modal-item_btn.modal-item_btn-sentiment {
    border-radius: 3px;
    color: white;
    padding-top: 1px;
    transition: 0.15s;
}

.modal-item_btn.modal-item_btn-sentiment.positive {
    background: #1cb394;
}
.modal-item_btn.modal-item_btn-sentiment.positive:hover {
    background: #16987e !important;
}

.modal-item_btn.modal-item_btn-sentiment.neutral {
    background: #f2b90a;
}
.modal-item_btn.modal-item_btn-sentiment.neutral:hover {
    background: #d8a409 !important;
}

.modal-item_btn.modal-item_btn-sentiment.negative {
    background: #ec5e5e;
}
.modal-item_btn.modal-item_btn-sentiment.negative:hover {
    background: #d15353 !important;
}

.modal-item_btn.modal-item_btn-sentiment i {
    margin: 0 0 0 5px;
}

.red-color {
    color: #ec5d5d;
}

.red-border-color {
    border-color: #ec5d5d;
}
.toggle-newspaper {
    background: rgb(50, 54, 57);
    color: white;
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0 13px;
    border-radius: 10px 10px 0 0;
    font-size: 16px;
    letter-spacing: 2px;
    cursor: pointer;
}
.toggle-newspaper i {
    transition: 0.15s;
}

.comments {
    margin-bottom: 16px;
}
.comment {
    font-size: 14px;

    padding: 12px 17px 12px 14px;
    border: 1px solid rgba(0, 0, 0, 0.2);

    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
    /* display: flex; */
    border-radius: 4px;
    transition: 0.2s;
    position: relative;
    min-height: 50px;
    margin-top: 16px;
    line-height: 1.4;
    display: inline-flex;
    width: 100%;
}

.comment:hover {
    transform: scale(1.01);
}

.comment-user {
    color: #000;
    font-weight: 600;
    margin-right: 7px;
    white-space: nowrap;
}
.comment-user:hover {
    color: #000;
    text-decoration: underline;
}

.comment-text {
    color: #333;
    font-weight: 300;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif ;
    text-overflow: ellipsis;
    overflow: hidden;
    padding: 1px 0;
}
.comment-text:hover {
    color: #000;
}

.comment-info {
    position: absolute;
    right: -10px;
    bottom: -10px;
    border: 1px solid #2f4050;
    height: 24px;
    display: flex;
    align-items: center;
    border-radius: 4px;

    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif ;
    background: white;
    color: white;
    font-size: 12px;
}

.comment-date {
    background: #2f4050;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 5px;
}
.comment-likes {
    color: #2f4050;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 1px 0 6px;
    margin-right: 5px;
}
.comment-likes i {
    margin-right: 5px;
    font-size: 14px;
}

.comment-title {
    font-size: 20px;
    font-weight: 600;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif ;
    margin-right: 10px;
}

.apply-btn {
    margin-left: auto;
    background: #1ab394;
    color: white;
    border-radius: 3px;
    padding: 0 9px;
    display: flex;
    align-items: center;
    height: 28px;
    font-weight: 600;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif ;
}
.apply-btn:hover {
    background: #138871;
}
.apply-btn.disabled {
    background: #a7b1c2;
    pointer-events: none;
}
.comment-status {
    display: flex;
    align-items: center;
    color: #676a6c;
    font-size: 15px;
    border: 1px solid;
    border-radius: 4px;
    padding: 0 5px 2px 5px;
    margin-bottom: 3px;
}
.comment-status.comment-error {
    color: #ec5d5d;
}
.comment-status.comment-parsing {
    color: #1cb394;
}

.search-comments-input {
    padding-left: 8px;
    border: 1px solid #ccc;
    height: 100%;
    margin-right: 10px;
    padding-top: 2px;
    border-radius: 4px;
    width: 100%;
}

.search-comments-input:focus {
    outline: none;
}

.modal-item-social-icon {
    position: relative;
    z-index: 0;
}
.modal-item-social-icon.fa-facebook-square::after,
.modal-item-social-icon.fa-odnoklassniki-square::after,
.modal-item-social-icon.fa-telegram::after,
.modal-item-social-icon.fa-youtube-play::after {
    content: "";
    position: absolute;
    left: 1px;
    right: 1px;
    top: 0;
    bottom: 0;
    height: 10px;
    background: white;
    z-index: -1;
    margin: auto;
    border-radius: 2px;
}
.modal-item-social-icon.fa-odnoklassniki-square::after {
    height: 14px;
}
.modal-item-social-icon.fa-facebook-square::after {
    height: 17px;
    border-radius: 50%;
    top: 1px;
}
.chat-gpt-modal {
    width: 65% !important;
    height: 80%;
    background: transparent !important;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif ;
    font-size: 16px;
    box-shadow: none !important;
    /* min-width: 940px; */
    min-width: 65%;
}

@media (max-width: 1000px) {
    .chat-gpt-modal {
        min-width: 540px;
        width: calc(100% - 20px) !important;
    }
}
.tab-head {
    display: flex;
}

.tab-item {
    position: relative;
    padding: 8px 10px;
    border: 1px solid #d4d4d4;
    border-radius: 4px 4px 0 0;
    margin-right: 10px;
    cursor: pointer;
    margin-bottom: -1px;
    /* background: white; */
    
    border-color: transparent !important;
    color: #A7B1C2;
}

.tab-item:hover {
    color: #676a6c;
}
.tab-item:not(.tab-item.selected):not(.tab-item:hover) {
    color: #929191;
}
.tab-item.selected {
    border-bottom: none;
    background: white;
    color: #495057 !important;
    border-color: #dee2e6 #dee2e6 #fff !important;
}
.tab-content-container {
    background: white;
    overflow: hidden;
    border: 1px solid #d4d4d4;
    border-radius: 0 0 0 5px;
    height: 100%;
}
.tab-content {
    /* padding: 22px; */
    padding: 14px 17px;
    height: calc(100% - 60px);
    overflow-y: scroll;
    overflow-x: visible;
    margin: 2px 2px 0 0;

    border: 2px solid #e7eaec;
    margin: 14px 17px;
    border-radius: 4px;
}
.imas-tag {
    display: inline !important;
    background: #6FA2CF !important;
    color: #fff !important;
    padding: 0 4px !important;
    border-radius: 3px !important;
    padding-bottom: .1em !important;
}
.similars-count {
    position: absolute;
    right: 50px;
    top: -10px;
    
    color: #ffffffd9;
    background: #3b5998c4;

    height: 24px;
    font-size: 14px;
    display: flex;
    align-items: center;
    padding: 1px 6px 0;
    border-radius: 4px;
    cursor: pointer;
    user-select: none;
    box-shadow: 0 0 5px #3b5998b3;
    transition: .15s;
}
.similars-count:hover {
    color: #fff;
    background: #3b5998;
}
@media (max-width: 1440px) {
    .item-container {
        width: 100%;
    }
}
/* .fa-exclamation {
    color: #3b5998;
    background: white;
    margin-left: 5px;
    width: 15px;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding-left: 1px;
    font-size: 10px;
} */
</style>