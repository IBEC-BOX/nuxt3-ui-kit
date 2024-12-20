import Pagination from "../runtime/components/Parts/Pagination/Default.vue";
import type { Meta, StoryFn } from "@storybook/vue3";
import type { IPaginationDefault } from "../runtime/components/Parts/Pagination/paginationTypes";

export default {
  title: "Parts/Pagination/Default",
  component: Pagination,
  tags: ["autodocs"],
} as Meta<typeof Pagination>;

const Template: StoryFn<IPaginationDefault> = (args: IPaginationDefault) => ({
  components: { Pagination },
  setup(): { args: IPaginationDefault } {
    return { args };
  },
  template: `
    <v-container>
      <Pagination v-bind="args" />
    </v-container>
  `,
});

export const Default: StoryFn<IPaginationDefault> = Template.bind({});
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

export const WithoutSidesButton: StoryFn<IPaginationDefault> = Template.bind({});
WithoutSidesButton.args = {
  paginationLastPage: 10,
  paginationTotalVisible: 3,
  sidesButton: false,
  iconButtonLeftPagination: "mdi-chevron-left-circle",
  iconButtonRightPagination: "mdi-chevron-right-circle",
};
