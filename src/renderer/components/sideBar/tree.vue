<template>
  <div class="tree-view">
    <div class="title" style="height:5px;margin-top:5px;">
      <!--
      <a
        href="javascript:;"
        :class="{'active': active === 'tree'}"
        title="Tree View"
      >
        <svg class="icon" aria-hidden="true" @click="active = 'tree'">
          <use xlink:href="#icon-tree"></use>
        </svg>       
      </a>
      <a
        href="javascript:;"
        :class="{'active': active === 'list'}"
        title="List View"
      >
        <svg class="icon" aria-hidden="true" @click="active = 'list'">
          <use xlink:href="#icon-list"></use>
        </svg>        
      </a>
      -->
    </div>
    <!-- opened files -->
    <!--
    <div class="opened-files">
      <div class="title">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-arrow"></use>
        </svg>
        <span class="text-overflow">Opened files</span>
        <a href="javascript:;" @click.stop="saveAll(false)" title="Save All">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-save-all"></use>
          </svg>
        </a>
        <a href="javascript:;" @click.stop="saveAll(true)" title="Close All">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-close-all"></use>
          </svg>
        </a>
      </div>
      <div class="opened-files-list">
        <transition-group name="list">
          <opened-file
            v-for="(tab, index) of tabs"
            :key="index"
            :file="tab"
          ></opened-file>
        </transition-group>
      </div>
    </div>
    -->
    <!-- project tree view -->
    <div 
      class="project-tree" v-if="projectTree"
    >
      <div class="title">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-arrow"></use>
        </svg>
        <span class="text-overflow">{{ projectTree.name }}</span>
      </div>
      <!-- tree view -->
      <div class="tree-wrapper" v-show="active === 'tree'">
        <folder
          v-for="(folder, index) of projectTree.folders" 
          :key="index + 'folder'"
          :folder="folder"
          :depth="depth"
        ></folder>
        <input
          type="text" class="new-input" v-show="createCache.dirname === projectTree.pathname"
          :style="{'margin-left': `${depth * 5 + 15}px` }"
          ref="input"
          v-model="createName"
          @keydown.enter="handleInputEnter"
        >
        <file
          v-for="(file, index) of projectTree.files" :key="index + 'file'"
          :file="file"
          :depth="depth"
        ></file>
        <div class="empty-project" v-if="projectTree.files.length === 0 && projectTree.folders.length === 0">
          <span>Empty project</span>
          <a href="javascript:;" @click.stop="createFile">Create File</a>
        </div>
      </div>
      <!-- list view -->
      <!--
      <div class="list-wrapper" v-show="active === 'list'">
        <list-file
          v-for="(file, index) of fileList"
          :key="index"
          :file="file"
        ></list-file>
      </div>
      -->
    </div>
    <div v-else class="open-project">
      <a href="javascript:;" @click="openProject" title="Open Folder">
        <svg class="icon" aria-hidden="true">
          <!--<use xlink:href="#icon-create-project"></use>-->
          <use xlink:href="#icon-folder-open"></use>
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
  import Folder from './folder.vue'
  import File from './file.vue'
  import ListFile from './listFile.vue'
  import OpenedFile from './openedFile.vue'
  import { mapState } from 'vuex'
  import bus from '../../bus'
  import { createFileOrDirectoryMixins } from '../../mixins'

  export default {
    mixins: [createFileOrDirectoryMixins],
    data () {
      this.depth = 0
      return {
        active: 'tree', // tree or list
        showNewInput: false,
        createName: ''
      }
    },
    props: {
      projectTree: {
        validator: function (value) {
          return typeof value === 'object'
        },
        required: true
      },
      fileList: Array,
      openedFiles: Array,
      tabs: Array
    },
    components: {
      Folder,
      File,
      ListFile,
      OpenedFile
    },
    computed: {
      ...mapState({
        'createCache': state => state.project.createCache
      })
    },
    created () {
      this.$nextTick(() => {
        bus.$on('SIDEBAR::show-new-input', this.handleInputFocus)
        // hide rename or create input if needed
        document.addEventListener('click', event => {
          const target = event.target
          if (target.tagName !== 'INPUT') {
            this.$store.dispatch('CHANGE_ACTIVE_ITEM', {})
            this.$store.commit('CREATE_PATH', {})
            this.$store.commit('SET_RENAME_CACHE', null)
          }
        })
        document.addEventListener('contextmenu', event => {
          const target = event.target
          if (target.tagName !== 'INPUT') {
            this.$store.commit('CREATE_PATH', {})
            this.$store.commit('SET_RENAME_CACHE', null)
          }
        })
        document.addEventListener('keydown', event => {
          if (event.key === 'Escape') {
            this.$store.commit('CREATE_PATH', {})
            this.$store.commit('SET_RENAME_CACHE', null)
          }
        })
      })
    },
    methods: {
      titleIconClick (active) {
        //
      },
      openProject () {
        this.$store.dispatch('ASK_FOR_OPEN_PROJECT')
      },
      saveAll (isClose) {
        this.$store.dispatch('ASK_FOR_SAVE_ALL', isClose)
      },
      createFile () {
        this.$store.dispatch('CHANGE_ACTIVE_ITEM', this.projectTree)
        bus.$emit('SIDEBAR::new', 'file')
      }
    }
  }
</script>

<style scoped>
  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active, .list-leave-active {
    transition: all .2s;
  }
  .list-enter, .list-leave-to
  /* .list-leave-active for below version 2.1.8 */ {
    opacity: 0;
    transform: translateX(-50px);
  }
  .tree-view {
    font-size: 14px;
    color: var(--regularColor);
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .tree-view > .title {
    height: 35px;
    line-height: 35px;
    padding: 0 15px;
    display: flex;
    flex-direction: row-reverse;
    & > span {
      flex: 1;
      user-select: none;
    }
    & > a {
      pointer-events: auto;
      cursor: pointer;
      margin-left: 8px;
      color: var(--secondaryColor);
      opacity: 0;
    }
    & > a:hover {
      color: var(--primary);
    }
    & > a.active {
      color: var(--primary);
    }
  }
  .tree-view:hover .title a {
    opacity: 1;
  }

  .opened-files,
  .project-tree {
    & > .title {
      height: 30px;
      line-height: 30px;
      font-size: 14px;
    }
  }

  .opened-files .title {
    padding-right: 15px;
    display: flex;
    align-items: center;
    & > span {
      flex: 1;
    }
    & > a {
      display: none;
      text-decoration: none;
      color: var(--secondaryColor);
      margin-left: 8px;
    }
  }
  .opened-files div.title:hover > a {
    display: block;
    &:hover {
      color: var(--primary);
    }
  }
  .opened-files {
    display: flex;
    flex-direction: column;
  }
  .opened-files .opened-files-list {
    max-height: 200px;
    overflow: auto;
    &::-webkit-scrollbar:vertical {
      width: 5px;
    }
    flex: 1;
  }

  .project-tree {
    display: flex;
    flex-direction: column;
    & > .title {
      display: flex;
      align-items: center;
    }
    & > .tree-wrapper,
    & > .list-wrapper {
      overflow: auto;
      flex: 1;
      &::-webkit-scrollbar:vertical {
        width: 5px;
      }
    }
    flex: 1;
  }
  .open-project {
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: -100px;
    & > a {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      text-decoration: none;
      background: rgba(31, 116, 255, .5);
      transition: all .3s ease;
      display: flex;
      justify-content: space-around;
      align-items: center;
      & > svg {
        width: 18px;
        height: 18px;
        color: #fff;
      }
      &:hover {
        background: var(--primary);
      }
    }
  }
  .new-input {
    outline: none;
    height: 22px;
    margin: 5px 0;
    border: 1px solid var(--lightBorder);
    width: calc(100% - 45px);
    border-radius: 3px;
  }
  .tree-wrapper {
    position: relative;
  }
  .empty-project {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    padding-top: 40px;
    align-items: center;
    & > a {
      color: var(--primary);
      text-align: center;
      margin-top: 15px;
      text-decoration: none;
    }
  }
  .bold {
    font-weight: 600;
  }
</style>
