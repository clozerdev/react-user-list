import { useFilters } from '../../lib/hooks/use-filters';
import { useUsers } from '../../lib/hooks/use-users';
import UsersListFilter from './user-list-filters';
import UserListPagination from './user-list-pagination';
import UsersListRows from './user-list-rows';

const UsersList = () => {
	const {
		filters,
		setPage,
		setItemsPerPage,
		setOnlyActive,
		setSearch,
		setSortBy
	} = useFilters();
	const { users, totalPages, error, loading } = useUsers(filters);

	return (
		<div className='max-w-container mx-auto p-4'>
			<h1 className='font-bold text-xl text-center mb-12'>
				Listado de usuarios
			</h1>
			<UsersListFilter
				search={filters.search}
				onlyActive={filters.onlyActive}
				sortBy={filters.sortBy}
				setOnlyActive={setOnlyActive}
				setSearch={setSearch}
				setSortBy={setSortBy}
			/>
			<UsersListRows users={users} error={error} loading={loading} />
			<UserListPagination
				page={filters.page}
				itemsPerPage={filters.itemsPerPage}
				setPage={setPage}
				setItemsPerPage={setItemsPerPage}
				totalPages={totalPages}
			/>
		</div>
	);
};

export default UsersList;
