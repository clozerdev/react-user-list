import { useState } from 'react';
import { ITEMS_PER_PAGE } from '../../constants/items-per-page';
import { SORT_OPTIONS } from '../../constants/sort-options.constant';

const INITIAL_STATE = {
	search: '',
	onlyActive: false,
	sortBy: SORT_OPTIONS.DEFAULT,
	page: 1,
	itemsPerPage: ITEMS_PER_PAGE.SIX
};

export const useFilters = () => {
	const [filters, setFilters] = useState(INITIAL_STATE);

	const setSearch = search => {
		setFilters({
			...filters,
			page: 1,
			search
		});
	};

	const setSortBy = sortBy => {
		setFilters({
			...filters,
			page: 1,
			sortBy
		});
	};

	const setOnlyActive = onlyActive => {
		const option = onlyActive && filters.sortBy === SORT_OPTIONS.ACTIVE;
		const newSortBy = option ? SORT_OPTIONS.DEFAULT : filters.sortBy;

		setFilters({
			...filters,
			sortBy: newSortBy,
			page: 1,
			onlyActive
		});
	};

	const setPage = page => {
		setFilters({
			...filters,
			page
		});
	};

	const setItemsPerPage = itemsPerPage => {
		setFilters({
			...filters,
			page: 1,
			itemsPerPage
		});
	};

	const resetFilters = () => setFilters(INITIAL_STATE);

	const { search, onlyActive, sortBy, page, itemsPerPage } = filters;

	return {
		filters: {
			search,
			onlyActive,
			sortBy
		},
		pagination: {
			page,
			itemsPerPage
		},
		filtersSetters: {
			setSearch,
			setSortBy,
			setOnlyActive
		},
		paginationSetters: {
			setPage,
			setItemsPerPage
		},
		resetFilters
	};
};
