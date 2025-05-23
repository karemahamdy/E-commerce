<template>
  <TopHeader />
  <MainNavbar />
  <CategoryNavbar/>
  <div class="max-w-6xl mx-auto p-6 grid grid-cols-2 md:grid-cols-2 gap-10">

    <ProductImages :images="product.images" :initialImage="product.images[0]" />

    <ProductDetails :title="product.title" :reviews="product.reviews" :price="product.price" :colors="product.colors"
      :sizes="product.sizes" :initialColor="product.colors[0]" :initialSize="product.sizes[1]" />

    <ProductDescription />

    <div class=" col-span-2 bg-white  px-8 py-4 rounded-lg shadow">
      <ProductReviews :productReviews="product.reviews" :reviewsCount="product.reviews" :ratingCounts="ratingCounts"
        :ratingPercentages="ratingPercentages" />
      <ProductComments />
    </div>
  </div>
  <!-- <Footer /> -->
</template>

<script>
import Footer from '../components/Footer.vue';
import CategoryNavbar from '../components/layout/Home/CategoryNavbar.vue';
import ProductComments from '../components/layout/Product/ProductId/ProductComments.vue';
import ProductDescription from '../components/layout/Product/ProductId/ProductDescription.vue';
import ProductDetails from '../components/layout/Product/ProductId/ProductDetails.vue';
import ProductImages from '../components/layout/Product/ProductId/ProductImages.vue';
import ProductReviews from '../components/layout/Product/ProductId/ProductReviews.vue';
import MainNavbar from '../components/MainNavbar.vue';
import TopHeader from '../components/TopHeader.vue';

export default {
  name: 'Product',
  data() {
    return {
      product: {
        title: "Shoes Reebok Zig Kinetica 3",
        reviews: 42,
        price: 199.0,
        images: [
          "../../public/assets/images/bag1.avif",
          "../../public/assets/images/bag2.avif",
          "../../public/assets/images/bag3.avif",
          "../../public/assets/images/bag4.avif",
          "../../public/assets/images/P00979395_d4.avif"
        ],
        colors: ['#ffffff', '#e5e5e5', '#000000'],
        sizes: ["40.5", "41", "42", "43", "43.5", "44", "44.5", "45", "46"]
      },
      selectedImage: "../../public/assets/images/bag1.avif",
      selectedColor: '#ffffff',
      selectedSize: "41",
      ratingCounts: {
        5: 34,
        4: 6,
        3: 2,
        2: 0,
        1: 0
      }
    };
  },
  components: {
    ProductComments,
    ProductDescription,
    ProductReviews,
    ProductDetails,
    ProductImages,
    Footer,
    CategoryNavbar,
    MainNavbar,
    TopHeader
  },
  computed: {
    ratingPercentages() {
      const total = Object.values(this.ratingCounts).reduce((a, b) => a + b, 0);
      const result = {};
      for (let i = 1; i <= 5; i++) {
        result[i] = total ? ((this.ratingCounts[i] || 0) / total) * 100 : 0;
      }
      return result;
    }
  }
};
</script>
