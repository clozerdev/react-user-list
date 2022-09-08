const UsersListFilter = ({
	search,
	setSearch,
	onlyActive,
	setOnlyActive,
	sortBy,
	setSortBy
}) => (
	<form className='flex items-center justify-between w-full'>
		<input
			type='text'
			value={search}
			onChange={ev => setSearch(ev.target.value)}
			className='outline-none border-2 px-2 py-1 rounded-sm'
		/>
		<div className='flex items-center'>
			<input
				type='checkbox'
				checked={onlyActive}
				onChange={ev => setOnlyActive(ev.target.checked)}
				className='h-4 w-4 mr-2'
			/>
			<span>Sólo activos</span>
		</div>
		<select
			className='outline-none'
			value={sortBy}
			onChange={ev => setSortBy(Number(ev.target.value))}
		>
			<option value={0}>Por defecto</option>
			<option value={1}>Por nombre</option>
		</select>
	</form>
);

export default UsersListFilter;
