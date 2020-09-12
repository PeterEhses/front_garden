<template>
  <fieldset class="upload-parent">
    <label for="fileselect" class="drag-drop"  v-cloak @drop.prevent="addFile" @dragover.prevent>
      <h3><slot>drag & drop</slot></h3>
    </label>
    <input type="file" accept="image/*" id="fileselect" name="fileselect[]"  @change="addFile"  multiple="multiple"/>
    <!-- multiple="multiple" to re-enable multiple file select-->

    <output v-if="response.length>0"> {{response}} </output>

    <ul class="file-display">
      <li v-for="(file, id) in files" :key="id">
        {{ file.name }} ({{ file.size | kb }} kb) <img :src="file.datauri" alt=""> <button @click="removeFile(file)" title="Remove">X</button>

      </li>
    </ul>
    <p class="warning " v-bind:class="{ hidden: hideWarn }">Some files could not be loaded. Did you choose only image files?</p>

  </fieldset>

</template>

<script>
export default {
  name: "DragDrop",
  data() {
    return{
      files:[],
      hideWarn: true,
      response: "",
      fileLength: 0,
    }

  },
  computed: {
    uploadDisabled() {

      return this.files.length === 0;
    }
  },
  watch: {
    files: {
      deep: true,
      handler(){
        this.fileLength = this.files.length
        this.$emit('fileLength', this.files.length)
      }
    }
  },
  methods:{
    addFile(e) {
      let _this = this;
      let droppedFiles = e.target.files || e.dataTransfer.files;
      if(!droppedFiles) return;
      // this tip, convert FileList to array, credit: https://www.smashingmagazine.com/2018/01/drag-drop-file-uploader-vanilla-js/
      this.hideWarn = true;
      ([...droppedFiles]).forEach(f => {
        if(this.isFileType(f)){
          f.reader = new FileReader();
          f.reader.readAsDataURL(f)
          f.datauri = "boi"
          f.reader.onload = e => {f.datauri = e.target.result; _this.files.splice(0,0)}; // super hacky. splice nothing to activate vue wrapper to force reactive behaviour
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
      this.$emit('uploadsuccess');
    },
    uploadFail() {
      this.response = "something went wrong"
    },
    uploadContinue(f){
      let file = f.pop();
      let _this = this;
      let formData = new FormData();
      formData.append("image_file", file);
      formData.append('garden', this.$gardenApi.garden)
      this.axios.post( this.$gardenApi.getPath(this.$gardenApi.imagesPath), //, undefined, 'api'
        formData,
        {
          headers: {
              'Content-Type': 'multipart/form-data' //  'application/json'//
          }
        }
      ).then(function(response){
        console.log(response);
        if(f.length > 0){
          _this.uploadContinue(f);
        } else {
          _this.uploadSucc()
        }

      })
      .catch(function(){
        _this.uploadFail()
      });
    },
    upload() {
      this.response = "working on it"
      this.uploadContinue(this.files);
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
  line-break: anywhere;
  img{
    border: $outline-weight solid $highlight-default;
    border-radius: 12345px;
    position: relative;
    top: 1em;
    height: 2.4em;
  }
}
ul{
  padding: 0;
}
li{
  list-style: none;
  line-break: anywhere;
}

@media (max-size: 800px){

}
</style>
