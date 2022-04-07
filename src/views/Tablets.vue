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
  name: "MyTablet",
  components: {
    ProductCard, Wrapper
  },
  computed: {
    products() {
      const productsFilter = this.$store.getters["products"];
      return productsFilter.filter((product) => {
        if (product.type.includes("Tablet")) {
          return true;
        } else {
          return false;
        }
      });
    },
  },
};
</script>