import Pagination from "../runtime/components/Parts/Pagination/Default.vue";
import type { Meta, Story } from "@storybook/vue3";
import type { IPaginationDefault } from "../runtime/components/Parts/Pagination/paginationTypes";

export default {
  title: "Parts/Pagination/Default",
  component: Pagination,
  tags: ["autodocs"],
} as Meta<typeof Pagination>;


const Template: Story<IPaginationDefault> = (args) => ({
  components: { Pagination },
  setup() {
    return { args };
  },
  template: `<Pagination v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  paginationLastPage: 15,
  paginationTotalVisible: 5,
  textButtonLeftPagination: "Назад",
  textButtonRightPagination: "Вперед",
  iconButtonLeftPagination: "mdi-chevron-left",
  iconButtonRightPagination: "mdi-chevron-right",
  sidesButton: true,
  wordMobilePagination: "Страница",
  ellipsisMobilePagination: "...",
};

export const WithoutSidesButton = Template.bind({});
WithoutSidesButton.args = {
  paginationLastPage: 10,
  paginationTotalVisible: 3,
  sidesButton: false,
  iconButtonLeftPagination: "mdi-chevron-left-circle",
  iconButtonRightPagination: "mdi-chevron-right-circle",
};
