<template>
  <fieldset class="upload-parent">
    <label for="fileselect" class="drag-drop"  v-cloak @drop.prevent="addFile" @dragover.prevent>
      <h3><slot>drag & drop</slot></h3>
    </label>
    <input type="file" accept="image/*,text/*" id="fileselect" name="fileselect[]" multiple="multiple" @change="addFile"/>
    <ul class="file-display">
      <li v-for="file in files" :key="file.id">
        {{ file.name }} ({{ file.size | kb }} kb) <button @click="removeFile(file)" title="Remove">X</button>
      </li>
    </ul>
    <p class="warning " v-bind:class="{ hidden: hideWarn }">Some files could not be loaded. Did you choose only image and text files?</p>
  </fieldset>

</template>

<script>
export default {
  name: "DragDrop",
  data: function() {
    return{
      files:[],
      hideWarn: true
    }

  },
  computed: {
    uploadDisabled() {
      return this.files.length === 0;
    }
  },
  methods:{
    addFile(e) {
      let droppedFiles = e.target.files || e.dataTransfer.files;
      if(!droppedFiles) return;
      // this tip, convert FileList to array, credit: https://www.smashingmagazine.com/2018/01/drag-drop-file-uploader-vanilla-js/
      this.hideWarn = true;
      ([...droppedFiles]).forEach(f => {
        if(this.isFileType(f)){
          this.files.push(f);
        } else {
          this.hideWarn = false;
        }
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

      let request = new XMLHttpRequest();

      request.onload = function(){
        if(this.readyState == this.DONE) {
    console.log(request.getResponseHeader("Content-Type"));
    console.log(request.response);
  }
      }
      const proxyurl = "https://cors-anywhere.herokuapp.com/"; // for cors policy error
      const url = "https://tangled.garden/api/texts";
      request.open("POST", proxyurl+url);
      request.send(formData);

    },
    isFileType(file) {
      let fileType = file && file['type'].split('/')[0];
      if(fileType === 'image' || fileType === 'text'){
        return true;
      } else {
        return false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.warning{
  @include font-default(0.8, $text-color: $negative);
  line-height: 1.3;
}

#fileselect{
  display: none;
}

.upload-parent{
  border: none;
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
