package com.dn5.junit;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;
public class AssertionsTest {
    @Test
    public void testAssertions() {
        assertEquals(5, 2 + 3);
        assertTrue(5 > 3);
        assertFalse(5 < 3);
        assertNull(null);
        assertNotNull(new Object());
    }
    @Test
    public void testMoreAssertions() {
        String expected = "JUnit";
        String actual = "JUnit";
        assertEquals(expected, actual);
        int[] expectedArray = {1, 2, 3};
        int[] actualArray = {1, 2, 3};
        assertArrayEquals(expectedArray, actualArray);
        assertThrows(ArithmeticException.class, () -> {
            int result = 5 / 0;
        });
    }
}
