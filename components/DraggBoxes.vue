<template>
  <div style="width: 100%">
    <div
      @drop="onDrop($event, 1)"
      @dragenter.prevent
      @dragover.prevent
      class="drop-zone"
    >
      <draggable v-model="items1" ghost-class="ghost" @end="onEnd">
        <transition-group name="flip-list" type="transition">
          <div
            class="drag-el1"
            v-for="item in items1"
            :key="item.id"
            :draggable="item.isDraggable"
            @dblclick="toggleDraggable(item)"
            @dragstart="startDragging($event, item)"
          >
            <v-icon v-show="!item.isDraggable">mdi-anchor</v-icon>
            {{ item.id }}
            {{ item.text }}
          </div>
        </transition-group>
      </draggable>
    </div>
    <v-divider></v-divider>
    <div
      @drop="onDrop($event, 2)"
      @dragenter.prevent
      @dragover.prevent
      class="drop-zone"
    >
      <div
        class="drag-el2"
        v-for="item in items2"
        :key="item.id"
        :draggable="item.isDraggable"
        @dblclick="toggleDraggable(item)"
        @dragstart="startDragging($event, item)"
      >
        <v-icon v-show="!item.isDraggable">mdi-anchor</v-icon>
        {{ item.id }}
        {{ item.text }}
      </div>
    </div>
    <strong>Old index: {{ this.oldIndex }}</strong>
    <br />
    <strong>New index: {{ this.newIndex }}</strong>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import draggable from "vuedraggable";
import { item, ItemsType } from "~/types/components/dragBoxes";
export default Vue.extend({
  name: "DraggBoxes",
  components: { draggable },
  data() {
    return {
      items: [
        { id: 1, text: "blablabla", isDraggable: true, boxId: 1 },
        { id: 2, text: "albalbalbalba", isDraggable: true, boxId: 2 },
        { id: 3, text: "oirhoeirhgoelrkn", isDraggable: true, boxId: 1 },
        { id: 4, text: "sejfoilsbdjkfsdfsdf", isDraggable: true, boxId: 1 },
        { id: 5, text: "yrbeubskdjb", isDraggable: true, boxId: 2 },
        { id: 6, text: "wopeijonldnsd", isDraggable: true, boxId: 2 },
        { id: 7, text: "opwejfoilsbdjkfsdfsdf", isDraggable: true, boxId: 1 },
      ] as ItemsType,
      items1: [],
      items2: [],
      oldIndex: 0,
      newIndex: 0,
    };
  },
  methods: {
    onEnd(e: any): void {
      this.oldIndex = e.oldIndex;
      this.newIndex = e.newIndex;
    },
    toggleDraggable(elem: item): void {
      elem.isDraggable = !elem.isDraggable;
    },
    startDragging(event: any, item: item): void {
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.setData("itemID", item.id);
    },
    onDrop(event: any, listNum: number): void {
      let itemID: number = parseInt(event.dataTransfer.getData("itemID"));
      let item: any = this.items.find((item: item) => item.id === itemID);
      item.boxId = listNum;
    },
  },
  watch: {
    items: {
      handler(newValue): void {
        this.items1 = newValue.filter((item: item) => item.boxId === 1);
        this.items2 = newValue.filter((item: item) => item.boxId === 2);
      },
      deep: true as boolean,
      immediate: true as boolean,
    },
  },
});
</script>

<style>
.drop-zone {
  background-color: darkgrey;
  width: 50%;
  margin: 1em auto;
  padding: 20px;
}
.drag-el1,
.drag-el2 {
  padding: 0.5em;
  margin: 0.5em;
  cursor: move;
  user-select: none;
}
.drag-el1 {
  background-color: coral;
}
.drag-el2 {
  background-color: chartreuse;
}
.sortable-drag {
  opacity: 0;
}
.flip-list-move {
  transition: transform 0.6s;
}
.ghost {
  border-left: 5px solid rgb(0, 184, 254);
  opacity: 0.7;
}
</style>
