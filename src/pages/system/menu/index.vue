<script setup lang="ts">
import type { DataTableColumns } from 'naive-ui'

definePage({
  meta: {
    title: '菜单管理',
    icon: 'i-icon-park-outline-list-checkbox',
  },
})

const list = [{ name: 'menu', tab: '菜单管理' }]

const columns: DataTableColumns = [
  {
    key: 'name',
    title: '菜单名称',
  },
  {
    key: 'icon',
    title: '菜单图标',
    align: 'center',
  },
  {
    key: 'updateTime',
    title: '更新时间',
    align: 'center',
  },
]
const data = ref<any[]>([])
const [loading, toggleToggle] = useToggle()

function fetchData(): Promise<any[]> {
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

function loadData() {
  toggleToggle(true)
  fetchData()
    .then((res) => {
      data.value = res
    })
    .finally(() => {
      toggleToggle(false)
    })
}

onMounted(() => {
  loadData()
})
</script>

<template>
  <div class="wh-full flex p-24px">
    <YTabsCard :list="list">
      <template #tab-menu>
        <YTable
          :columns
          :data
          :loading
          remote
        >
          <template #action>
            <YTableAddButton>
              新增
            </YTableAddButton>
            <YTableDeleteButton>
              删除
            </YTableDeleteButton>
          </template>
          <template #search>
            <YTableSearch />
          </template>

          <template #column-icon="{ row }">
            <YTableColumnIcon :value="row.icon" />
          </template>

          <template #column-updateTime="{ row }">
            <YTableColumnDate :value="row.updateTime" />
          </template>
        </YTable>
      </template>
    </YTabsCard>
  </div>
</template>
