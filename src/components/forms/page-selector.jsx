import IconButton from '../buttons/icon-button';
import ArrowLeftIcon from '../icons/arrow-left-icon,';
import ArrowRightIcon from '../icons/arrow-right-icon';

const PageSelector = ({ page, dispatchFilters, totalPages }) => {
	const isFirstPage = page === 1;
	const isLastPage = page === totalPages || totalPages === 0;

	return (
		<div className='flex items-center gap-4'>
			<IconButton
				filled
				disabled={isFirstPage}
				icon={ArrowLeftIcon}
				onClick={() =>
					dispatchFilters({
						value: page - 1,
						type: 'page_changed'
					})
				}
			/>
			<span>
				Página {page} de {totalPages || 1}
			</span>
			<IconButton
				filled
				disabled={isLastPage}
				icon={ArrowRightIcon}
				onClick={() =>
					dispatchFilters({
						value: page + 1,
						type: 'page_changed'
					})
				}
			/>
		</div>
	);
};

export default PageSelector;
