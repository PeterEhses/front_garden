<template>
  <div class="upload-parent">
    <div class="drag-drop">
      <h3><slot>drag & drop</slot></h3>
    </div>
    <ul class="file-display">
      <li>a_file.jpg</li>
    </ul>
  </div>

</template>

<script>
export default {
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
