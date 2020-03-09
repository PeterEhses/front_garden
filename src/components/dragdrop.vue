<template>
  <div class="upload-parent">
    <div class="drag-drop"  v-cloak @drop.prevent="addFile" @dragover.prevent>
      <h3><slot>drag & drop</slot></h3>
    </div>
    <ul class="file-display">
      <li v-for="file in files" :key="file.id">
        {{ file.name }} ({{ file.size | kb }} kb) <button @click="removeFile(file)" title="Remove">X</button>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: "DragDrop",
  data: function() {
    return{
      files:[]
    }

  },
  computed: {
    uploadDisabled() {
      return this.files.length === 0;
    }
  },
  methods:{
    addFile(e) {
      let droppedFiles = e.dataTransfer.files;
      if(!droppedFiles) return;
      // this tip, convert FileList to array, credit: https://www.smashingmagazine.com/2018/01/drag-drop-file-uploader-vanilla-js/
      ([...droppedFiles]).forEach(f => {
        this.files.push(f);
      });
    },
    removeFile(file){
      this.files = this.files.filter(f => {
        return f != file;
      });
    },
    upload() {

      let formData = new FormData();
      this.files.forEach((f,x) => {
        formData.append('file'+(x+1), f);
      });

      fetch('https://httpbin.org/post', {
        method:'POST',
        body: formData
      })
      .then(res => res.json())
      .then(res => {
         console.log('done uploading', res);
      })
      .catch(e => {
        console.error(JSON.stringify(e.message));
      });

    }
  }
}
</script>

<style lang="scss" scoped>
.upload-parent{
  margin: 0;
  padding: 0;
}
.drag-drop{
  display: block;
  position: relative;
  width: 100%;
  min-height: 2rem;

  border: $outline-weight dashed $highlight-default;
  border-radius: 1.5*$frame-constant 0;
}
.file-display{
  @include font-default(0.8);
}
</style>
