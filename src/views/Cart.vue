<template>
  <Wrapper>
    <div class="container-cart">
      <h2>Your Cart</h2>
      <!--  -->
      <h3>Total Amount: ₿ {{ cartTotal }}</h3>
      <ul>
        <!-- a for each loop for our cart array in our index.js, which we pass into our CartCard as PROPS  -->
        <CartCard
          v-for="product in cartProducts"
          :key="product.id"
          :id="product.id"
          :type="product.type"
          :brand="product.brand"
          :model="product.model"
          :color="product.color"
          :capacity="product.capacity"
          :imgSrc="product.imgSrc"
          :price="product.price"
          :qty="product.qty"
        ></CartCard>
      </ul>
    </div>
  </Wrapper>
</template>

<script>
import CartCard from "../components/CartCard";
import Wrapper from "../components/Wrapper";


export default {
  name: "MyCard",
  components: {
    CartCard, Wrapper
  },
  computed: {
    // we calculate the total in our cart
    cartTotal() {
      return this.$store.getters["totalSum"].toFixed(2);
    },
    // we get the cart array which originally started empty, but now has some products in it
    cartProducts() {
      return this.$store.getters["cart"];
    },
  },
};
</script>

<style scoped>
.container-cart {
  display: flex;
  flex-direction: column;
}

h2 {
  color: #292929;
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 1rem;
}

h3 {
  text-align: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>