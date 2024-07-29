<script setup lang="tsx">
definePage({
  meta: {
    title: '菜单管理',
    icon: 'i-icon-park-outline-list-checkbox',
  },
})

const list = [{ name: 'menu', tab: '菜单管理' }]

const tableRef = ref()
const columns: any = [
  {
    key: 'name',
    title: '菜单名称',
  },
  {
    key: 'icon',
    title: '菜单图标',
    align: 'center',
    component: 'icon',
  },
  {
    key: 'updateTime',
    title: '更新时间',
    align: 'center',
    component: 'date',
    componentProps: {
      format: 'YYYY-MM-DD HH:mm',
    },
  },
  {
    key: 'action',
    title: '操作',
    align: 'center',
    flex: true,
  },
]
const search = ref<any>({})
const [show, toggleShow] = useToggle()
const model = ref<any>({})
const items = [
  {
    path: 'name',
    label: '菜单名称',
    component: 'Input',
  },
  {
    path: 'icon',
    label: '菜单图标',
  },
]

function request(): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: '菜单名称',
          icon: 'i-icon-park-outline-list-checkbox',
          updateTime: '2023-03-21',
          children: [
            {
              name: '子菜单名称',
              icon: 'i-icon-park-outline-tag',
              updateTime: '2023-03-21',
            },
          ],
        },
        {
          name: '菜单名称',
          icon: 'i-icon-park-outline-list-checkbox',
          updateTime: '2023-03-21',
        },
      ])
    }, 1000)
  })
}

function handleSearch(data?: any) {
  console.log(data)
  tableRef.value.refresh()
}

function handleAdd() {
  toggleShow(true)
}

function handleEdit(data: any) {
  console.log(data)
}

function handleSave() {
  toggleShow(false)
  console.log(model.value)
}

function handleDelete(data: any) {
  console.log(data)
}

function handleSelect(key: string | number, option: any) {
  console.log(key, option)
}
</script>

<template>
  <div class="wh-full flex p-24px">
    <YTabsCard :list="list">
      <template #tab-menu>
        <YTable
          ref="tableRef"
          :columns
          :pagination="false"
          :request
        >
          <template #action>
            <YTableAddButton @click="handleAdd">
              新增
            </YTableAddButton>
          </template>
          <template #search>
            <YTableSearch
              v-model:value="search"
              filter="popover"
              @search="handleSearch"
            >
              <NInput
                v-model:value="search.keyword"
                placeholder="请输入菜单名称"
                clearable
              >
                <template #suffix>
                  <div
                    class="i-icon-park-outline-search ml-4px cursor-pointer"
                    @click="handleSearch"
                  />
                </template>
              </NInput>

              <template #filter>
                <NForm
                  label-placement="left"
                  :show-feedback="false"
                >
                  <NGrid>
                    <NFormItemGi label="菜单名称" :span="24">
                      <NInput
                        v-model:value="search.name"
                        placeholder="请输入菜单名称"
                        clearable
                      />
                    </NFormItemGi>
                  </NGrid>
                </NForm>
              </template>
            </YTableSearch>
          </template>

          <!-- <template #column-icon="{ row }">
            <YTableColumnIcon :value="row.icon" />
          </template> -->

          <!-- <template #column-updateTime="{ row }">
            <YTableColumnDate :value="row.updateTime" />
          </template> -->

          <template #column-action="{ row }">
            <YTableColumnEditButton @click="handleEdit(row)" />
            <YTableColumnDeleteButton @positive-click="() => handleDelete(row)" />
            <YTableColumnMoreButton
              :dropdown="{
                options: [
                  { key: 'edit', label: '编辑' },
                  { key: 'delete', label: '删除' },
                ],
              }"
              @select="handleSelect"
            />
          </template>
        </YTable>

        <YDrawer
          v-model:show="show"
          title="编辑菜单"
          @confirm="handleSave"
        >
          <YForm
            :model
            :items
          >
            <!-- <template #item-name>
              <NInput v-model:value="model.name" />
            </template> -->
            <template #item-icon="{ model: formModel }">
              <NInput v-model:value="formModel.icon" />
            </template>
          </YForm>
        </YDrawer>
      </template>
    </YTabsCard>
  </div>
</template>
