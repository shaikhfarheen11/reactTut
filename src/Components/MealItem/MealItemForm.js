import React, { useRef, useState } from 'react';
import Input from '../UI/Input/Input';
import classes from './MealItemForm.module.css';


const MealItemForm = (props) => {
    const [amountIsValid] = useState(true);
    const [sizeIsValid, setSizeIsValid] = useState(true);
    const [isSizeSelected, setIsSizeSelected] = useState(false);
    const [maxQuantity, setMaxQuantity] = useState(0); // Max quantity based on size
    const [currentQuantity, setCurrentQuantity] = useState(0); // Current quantity selected
    const [selectedSize, setSelectedSize] = useState('');

   
    const amountInputRef = useRef();
    const sizeInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (selectedSize === 'Small' || selectedSize === 'Medium' || selectedSize === 'Large') {
            setSizeIsValid(true);
            setIsSizeSelected(true);
            console.log("Selected Size:", selectedSize);
            props.onAddToCart(selectedSize, enteredAmountNumber, selectedSize);
        } else {
            setSizeIsValid(false);
        }
    };

    const handleSizeChange = () => {
        const selectedSize = sizeInputRef.current.value;
        if (selectedSize === 'Large') {
            setMaxQuantity(50);
        } else if (selectedSize === 'Medium') {
            setMaxQuantity(200);
        } else if (selectedSize === 'Small') {
            setMaxQuantity(150);
        }
        setCurrentQuantity(0); // Reset current quantity when size changes
        setSelectedSize(selectedSize); // Update the selectedSize state
        setIsSizeSelected(true);
    };

    const handleAmountChange = () => {
        const enteredAmount = amountInputRef.current.value;
        setCurrentQuantity(+enteredAmount);
    };

    const isAddButtonDisabled = currentQuantity >= maxQuantity || currentQuantity === 0 || !isSizeSelected;

    
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label='Amount'
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '0',
                    max: maxQuantity,
                    step: '1',
                    value: currentQuantity,
                    onChange: handleAmountChange,
                    disabled: !isSizeSelected || maxQuantity === 0
                }}
            />
            <select
                ref={sizeInputRef}
                className={classes.sizeInput}
                onChange={handleSizeChange}
            >
                <option value="">Select size</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
            </select>
            <button disabled={isAddButtonDisabled}>+ Add</button>
            {!amountIsValid}
            {!sizeIsValid}
        </form>
    );
};

export default MealItemForm;
