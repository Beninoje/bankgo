import { transactionCategoryStyles } from '@/constants'
import { cn } from '@/lib/utils'
import { CategoryBadgeProps } from '@/types'
import React from 'react'

const CategoryBadge = ({category}: CategoryBadgeProps) => {
    const {
        borderColor,
        backgroundColor,
        textColor,
        chipBackgroundColor,
    } = transactionCategoryStyles[category as keyof typeof transactionCategoryStyles] || transactionCategoryStyles.default
  return (
    <div className={cn('category-badge', borderColor, chipBackgroundColor)}>
        <div className={cn('size-2 rounded-full', backgroundColor)}></div>
        <p className={cn('text-[12px] font-medium', textColor)}>{category}</p>
        
    </div>
  )
}

export default CategoryBadge