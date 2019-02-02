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

        if (number === '') {
            return 1
        } else {
            try {
                const parseNumber = Number.parseFloat(eval(result[0]))

                console.log('getNum: ', parseNumber)
                return parseNumber
            } catch (err) {
                return 'invalid number'
            }
        }
    }

    this.getUnit = function(input) {
        const result = input.split(/[\d|.|+|-|*|\/\\]/)
        const unit = result[result.length - 1].toLowerCase()
        const validUnits = ['gal', 'l', 'lbs', 'kg', 'mi', 'km']

        console.log(
            'getUnit: ',
            validUnits.includes(unit) ? unit : 'invalid unit'
        )
        return validUnits.includes(unit) ? unit : 'invalid unit'
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
            result = 'lb'
            break
            case 'mi':
                result = 'km'
                break
          case 'km':
            result = 'mi'
            break
        default:
            result = 'error'
        }

        console.log('getReturnUnit: ', result)
        return result
    }

    this.spellOutUnit = function(unit) {
        const result = 0

        console.log('spellOutUnit: ', unit)
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
                  result = 'error'
            }

            console.log('convert: ', result.toFixed(5))
            return result.toFixed(5)
        } catch (err) {
            console.log('convert: ', 'error')
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
                const result = {
                    initNum,
                    initUnit,
                    returnNum,
                    returnUnit,
                    string: `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`,
                }

                return result
        }
    }
}

module.exports = ConvertHandler
