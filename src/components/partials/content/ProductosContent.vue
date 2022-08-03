<template>
  <div class="p-30">
    <div class="base-group base-group_size_medium background-hover">
        <div class="base-group__img background">
            <img src="../../assets/images/SVG/icono-1.svg" class="w-8 h-8"/>
            </div>
            <div class="base-group__content">
            <div class="base-text mb-5 base-group__content__title" >
                <div class="base-text__content background text-primary" >
                    Productos
                </div>
            </div>
        </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
        productos: [
            {
                name: '1',
                icon: '',
                url: '',
            }
        ]
    }
  }
}
</script>