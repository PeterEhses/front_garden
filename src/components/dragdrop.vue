<template>
  <fieldset class="upload-parent">
    <label for="fileselect" class="drag-drop"  v-cloak @drop.prevent="addFile" @dragover.prevent>
      <h3><slot>drag & drop</slot></h3>
    </label>
    <input type="file" accept="image/*,text/*" id="fileselect" name="fileselect[]" multiple="multiple" @change="addFile"/>

    <output> {{response}} </output>

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
      hideWarn: true,
      response: " "
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
    uploadSucc() {
      this.files = [];
      this.response = "upload successful"
    },
    uploadFail() {
      this.response = "something went wrong"
    },
    upload() {
      let self = this;
      let formData = new FormData();
      this.files.forEach((f) => {
        formData.append("image_file", f);
      });
      this.response = "working on it"
      this.axios.post( 'https://tangled.garden/api/images/?format=api', // does this really need axios? would be nicer standalone using xhttprequest...
        formData,
        {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
        }
      ).then(function(response){
        console.log(response);
        self.uploadSucc()
      })
      .catch(function(){
        self.uploadFail()
      });
    },
    isFileType(file) {
      let fileType = file && file['type'].split('/')[0];
      if(fileType === 'image'){ //  || fileType === 'text'
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
ul{
  padding: 0;
}
li{
  list-style: none;
}
</style>
