<template>
  <div class="product-card">
    <div class="image-container">
      <img class="img-style" :src="imgSrc" :alt="brand + model" />
    </div>
    <!-- we read the price data we receive via props  -->
    <p class="price-label">₿ {{ price.toFixed(2) }}</p>
    <button @click="addToCart">Add to Cart</button>
    <span class="product-title">
      <!-- we read the data we receive via props  -->
      {{ brand }} {{ model }} {{ color }} {{ capacity }}
    </span>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  // the props we expect which match our data in the store file index.js
  props: [
    "id",
    "type",
    "brand",
    "model",
    "color",
    "capacity",
    "imgSrc",
    "price",
  ],
  methods: {
    // a method to trigger an action, to add an object to the cart
    addToCart() {
      this.$store.dispatch("addToCart", {
        id: this.id,
        type: this.type,
        brand: this.brand,
        model: this.model,
        color: this.color,
        capacity: this.capacity,
        imgSrc: this.imgSrc,
        price: this.price,
      });
    },
  },
};
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  height: 450px;
  max-height: 450px;
  max-width: 250px;
  background-color: white;
  border-radius: 15px;
  flex: 1 1 240px;
  margin: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(60, 60, 60, 0.2);
  padding: 30px;
}

.img-style {
  display: flex;
  height: 250px;
  object-fit: cover;
}

.image-container {
  display: flex;
  justify-content: center;
}

.product-title {
  display: flex;
  color: rgba(66, 185, 131, 1);
  font-weight: bold;
  height: 100%;
  align-items: flex-start;
  justify-content: center;
}

.price-label {
  font-weight: bold;
  font-size: 20px;
}
</style>