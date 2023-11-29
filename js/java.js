document.addEventListener('DOMContentLoaded', function() {
    const subTotal = document.getElementById('subTotal');
    const taxRate = document.getElementById('taxRate');
    const calculateBtn = document.getElementById('calculate');
    const salesTaxInput = document.getElementById('salesTax');
    const totalInput = document.getElementById('total');
    const clearBtn = document.getElementById('clear');
    subTotal.focus();
    calculateBtn.addEventListener('click', function() {
        processEntries();
    });

    function processEntries(){
    subTotal.focus();
      const subtotalValue = parseFloat(subTotal.value);
      const taxRateValue = parseFloat(taxRate.value);
    if(subtotalValue <= 0 || subtotalValue >= 10000 || taxRateValue <= 0 || taxRateValue >= 12)
    {alert('Subtotal must be > 0 and < 10000. Tax Rate must be > 0 and < 12.');
    return;
    }
      const salesTax = subtotalValue * (taxRateValue / 100);
      const total = subtotalValue + salesTax;
      salesTaxInput.value = salesTax.toFixed(2);
      totalInput.value = total.toFixed(2);
    }
  
    clearBtn.addEventListener('click', function() {
      subTotal.value = '';
      taxRate.value = '';
      salesTaxInput.value = '';
      totalInput.value = '';
    });
});
