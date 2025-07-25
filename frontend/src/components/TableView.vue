<template>
    <div class="p-4 bg-white rounded shadow-md">
        <div class="flex justify-between items-center mb-4">
            <input v-model="search" placeholder="Search..." class="p-2 border rounded w-full max-w-sm" />
        </div>

        <div v-if="filteredList.length">
            <table class="w-full table-auto border">
                <thead>
                    <tr>
                        <th v-for="(col, index) in table.headerDisplay" :key="col"
                            class="border px-4 py-2 cursor-pointer" @click="sortBy(table.headerKeys[index])">
                            {{ col.toUpperCase() }}
                            <span v-if="sortKey === table.headerKeys[index]">
                                {{ sortAsc ? '▲' : '▼' }}
                            </span>
                        </th>
                        <th v-if="!readonly" class="border px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in paginatedList" :key="item.id">
                        <td v-for="key in table.headerKeys" :key="item.id + '-' + key" class="border px-4 py-2">
                            {{ item[key] }}
                        </td>
                        <td v-if="!readonly" class="border px-4 py-2">
                            <button @click="$emit('edit-item', item)" class="text-blue-600 hover:underline mr-2">
                                Edit
                            </button>
                            <button @click="confirmDelete(item.id)" class="text-red-600 hover:underline">
                                Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <!-- Pagination -->
            <div class="mt-4 flex justify-between items-center">
                <button @click="prevPage" :disabled="currentPage === 1" class="px-3 py-1 border rounded">
                    Previous
                </button>
                <span>Page {{ currentPage }} of {{ totalPages }}</span>
                <button @click="nextPage" :disabled="currentPage === totalPages" class="px-3 py-1 border rounded">
                    Next
                </button>
            </div>
        </div>
        <div v-else class="text-gray-600">No items found.</div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
    table: {
        type: Object,
        required: true
    },
    readonly: {
        type: Boolean,
        default: false
    }
})

const search = ref('')
const sortKey = ref('')
const sortAsc = ref(true)
const currentPage = ref(1)
const itemsPerPage = 5

const list = computed(() => (Array.isArray(props.table.list) ? props.table.list : []))

const filteredList = computed(() => {
    const keyword = search.value.toLowerCase()
    return list.value.filter(item =>
        Object.values(item).some(val => String(val).toLowerCase().includes(keyword))
    )
})

const sortedList = computed(() => {
    if (!sortKey.value) return filteredList.value
    return [...filteredList.value].sort((a, b) => {
        const aVal = a[sortKey.value] ?? ''
        const bVal = b[sortKey.value] ?? ''

        const aNum = Number(aVal)
        const bNum = Number(bVal)

        if (!isNaN(aNum) && !isNaN(bNum)) {
            return sortAsc.value ? aNum - bNum : bNum - aNum
        } else {
            return sortAsc.value
                ? String(aVal).localeCompare(String(bVal))
                : String(bVal).localeCompare(String(aVal))
        }
    })
})

const totalPages = computed(() => Math.ceil(sortedList.value.length / itemsPerPage))

const paginatedList = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage
    return sortedList.value.slice(start, start + itemsPerPage)
})

function sortBy(columnKey) {
    if (sortKey.value === columnKey) {
        sortAsc.value = !sortAsc.value
    } else {
        sortKey.value = columnKey
        sortAsc.value = true
    }
}

function nextPage() {
    if (currentPage.value < totalPages.value) currentPage.value++
}
function prevPage() {
    if (currentPage.value > 1) currentPage.value--
}

function confirmDelete(id) {
    if (confirm('Are you sure you want to delete this property?')) {
        // Emit event to parent
        emit('delete-item', id)
    }
}

const emit = defineEmits(['edit-item', 'delete-item'])
</script>
