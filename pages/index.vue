<template>
  <div>
    <JumbotronHomePage />
    <FeaturesHomePage />
    <TabContentHomePage class="px-4 2xl:px-0" />
    <PartnerHomePage class="px-4 2xl:px-0" />
    <FeedbackHomePage class="px-4 2xl:px-0" />
    <NewsHomePage class="px-4 2xl:px-0" />
  </div>
</template>

<script>
import JumbotronHomePage from "@/components/widgets/home-page/Jumbotron";
import FeaturesHomePage from "@/components/widgets/home-page/Features";
import TabContentHomePage from "@/components/widgets/home-page/TabContent/index";
import PartnerHomePage from "@/components/widgets/home-page/Partner/index";
import FeedbackHomePage from "@/components/widgets/home-page/Feedback";
import NewsHomePage from "@/components/widgets/home-page/News/index";

export default {
  name: "IndexPage",
  components: {
    JumbotronHomePage,
    FeaturesHomePage,
    TabContentHomePage,
    PartnerHomePage,
    FeedbackHomePage,
    NewsHomePage,
  },
};
</script>
