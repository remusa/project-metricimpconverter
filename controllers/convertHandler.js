/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
    this.getNum = function(input) {
        const result = input.split(/[a-zA-z]/)
        const number = result[0]
        // console.log('number: ', number)

        if (number === '') {
            return 1
        } else if (/[/](.*)([/])/g.test(number)) {
            return 'invalid number'
        } else {
            try {
                const parseNumber = Number.parseFloat(eval(result[0]))

                // console.log('getNum: ', parseNumber)
                return parseNumber
            } catch (err) {
                return 'invalid number'
            }
        }
    }

    this.getUnit = function(input) {
        const result = input.split(/[\d|.|+|-|*|\/\\]/)
        const unit = result[result.length - 1].toLowerCase()
        const validUnits = [
            'gal',
            'l',
            'mi',
            'km',
            'lbs',
            'kg',
            // 'GAL',
            // 'L',
            // 'MI',
            // 'KM',
            // 'LBS',
            // 'KG',
        ]

        // console.log(
        //     'getUnit: ',
        //     validUnits.includes(unit) ? unit : 'invalid unit'
        // )
        return validUnits.includes(unit) ? unit.toLowerCase() : 'invalid unit'
    }

    this.getReturnUnit = function(initUnit) {
        let result

        switch (initUnit.toLowerCase()) {
          case 'gal':
                result = 'l'
                break
            case 'l':
                result = 'gal'
                break
            case 'lbs':
                result = 'kg'
                break
        case 'kg':
                result = 'lbs'
                break
        case 'mi':
            result = 'km'
            break
            case 'km':
                result = 'mi'
                break
            default:
                result = 'invalid unit'
        }

        // console.log('getReturnUnit: ', result)
        return result
    }

    this.spellOutUnit = function(unit) {
        let result

        switch (unit.toLowerCase()) {
          case 'gal':
                result = 'gallons'
                break
            case 'l':
                result = 'liters'
                break
        case 'lbs':
                result = 'pounds'
                break
        case 'kg':
                result = 'kilograms'
                break
        case 'mi':
                result = 'miles'
                break
        case 'km':
                result = 'kilometers'
                break
            default:
                result = 'units'
                break
        }

        // console.log('spellOutUnit: ', result)
        return result
    }

    this.convert = function(initNum, initUnit) {
        const galToL = 3.78541
        const lbsToKg = 0.453592
        const miToKm = 1.60934

        let result

        try {
            const evalInitNum = Number.parseFloat(eval(initNum))

            switch (initUnit) {
                case 'gal':
                result = galToL * evalInitNum
                break
            case 'l':
                    result = evalInitNum / galToL
                break
                case 'lbs':
                    result = lbsToKg * evalInitNum
                    break
                case 'kg':
                result = evalInitNum / galToL
                break
                case 'mi':
                    result = miToKm * evalInitNum
                    break
            case 'km':
                    result = evalInitNum / miToKm
                break
              default:
                  return 'invalid number'
            }

            // console.log('convert: ', result)
            return +parseFloat(result.toFixed(5))
        } catch (err) {
            // console.log('convert: ', 'error')
            return 'error'
        }
    }

    this.getString = function(initNum, initUnit, returnNum, returnUnit) {
        if (initNum === 'invalid number' && initUnit === 'invalid unit') {
            return 'invalid number and unit'
        } else if (initNum === 'invalid number') {
            return 'invalid number'
        } else if (initUnit === 'invalid unit') {
            return 'invalid unit'
        } else {
            const initSpell = this.spellOutUnit(initUnit)
            const returnSpell = this.spellOutUnit(returnUnit)

            const result = {
                initNum,
                initUnit,
                returnNum,
                returnUnit,
                string: `${initNum} ${initSpell} converts to ${returnNum} ${returnSpell}`,
                // string: `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`,
            }

            return result
        }
    }
}

module.exports = ConvertHandler
