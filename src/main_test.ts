import { add } from './main.ts';
import { assertEquals } from 'https://deno.land/std@0.201.0/assert/mod.ts';

Deno.test(function addTest() {
	assertEquals(add(2, 3), 5);
});
