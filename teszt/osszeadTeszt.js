QUnit.module('szamol', (hook) => {
    hook.before(() =>{
      this.szamolas = new Szamolas()
    })
    QUnit.test('Létezik-e?', assert=> {
      assert.ok(szamolas.szamol);
    });
    QUnit.test('Függvény-e?', assert=> {
        assert.ok(typeof(szamolas.szamol== "function"));
      });

    //alap működés
    QUnit.test('Pozitiv egész számok', assert=> {
        kapott = szamolas.szamol(3,5)
        vart = 8
        assert.equal(kapott, vart)
      });

      QUnit.test('Negatív egész számok', assert=> {
        kapott = szamolas.szamol(-3,-35)
        vart = -38
        assert.equal(kapott, vart)
      });

      QUnit.test('Vegyes előjelű egész számok', assert=> {
        kapott = szamolas.szamol(-1,5)
        vart = 4
        assert.equal(kapott, vart)
      });

      
      QUnit.test('Tört számok', assert=> {
        kapott = szamolas.szamol(6.7,2.7)
        vart = 9.4
        assert.equal(kapott, vart)
      });

      QUnit.test('szövegként megadott szám', assert=> {
        kapott = szamolas.szamol(2,"3")
        vart = 5
        assert.equal(kapott, vart)
      });

      QUnit.test('szöveg de nem szám', assert=> {
        kapott = szamolas.szamol(2,"kismacska")
        vart = "A bemeneti paraméterek számok!"
        assert.equal(kapott, vart)
      });

      QUnit.test('', assert=> {
        kapott = szamolas.szamol(2,)
        vart = "Két paraméter szükséges!"
        assert.equal(kapott, vart)
      });

      QUnit.test('', assert=> {
        kapott = szamolas.szamol(2222222222e+222222222222,33333333e+3)
        vart = "Túlcsordulás"
        assert.equal(kapott, vart)
      });

      //speciális esetek
  });