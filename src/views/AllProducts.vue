<template>
  <Wrapper>
    <!-- a for each loop for our products array in our index.js, which we pass into our ProductCard as PROPS  -->
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :id="product.id"
      :type="product.type"
      :brand="product.brand"
      :model="product.model"
      :color="product.color"
      :capacity="product.capacity"
      :imgSrc="product.imgSrc"
      :price="product.price"
    />
  </Wrapper>
</template>

<script>
import ProductCard from "../components/ProductCard";
import Wrapper from "../components/Wrapper";


export default {
  components: {
    ProductCard, Wrapper
  },
  computed: {
    products() {
      // we get our products from the array
      const productsSort = this.$store.getters["products"];
      // we sort this array
      return productsSort.sort((a, b) => {
        // it looks like we compare models and return -1 or 1 or 0
        if (a.model < b.model) {
          return -1;
        }
        if (a.model > b.model) {
          return 1;
        }
        return 0;
      });
    },
  },
};
</script>