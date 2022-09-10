import { useState } from 'react';
import { ITEMS_PER_PAGE } from '../../constants/items-per-page';
import { SORT_OPTIONS } from '../../constants/sort-options.constant';

export const useFilters = () => {
	const [filters, setFilters] = useState({
		search: '',
		onlyActive: false,
		sortBy: SORT_OPTIONS.DEFAULT,
		page: 1,
		itemsPerPage: ITEMS_PER_PAGE.SIX
	});

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
			itemsPerPage
		});
	};

	return {
		filters,
		setSearch,
		setSortBy,
		setOnlyActive,
		setPage,
		setItemsPerPage
	};
};
