import sys, os
_here = os.path.dirname(os.path.abspath(__file__))
sys.modules.pop("solution", None)
sys.path.insert(0, _here)

import pytest
from solution import MedianFinder


def test_two_numbers():
    mf = MedianFinder()
    mf.add_num(1)
    mf.add_num(2)
    assert mf.find_median() == 1.5


def test_three_numbers():
    mf = MedianFinder()
    mf.add_num(1)
    mf.add_num(2)
    mf.add_num(3)
    assert mf.find_median() == 2.0


def test_single_number():
    mf = MedianFinder()
    mf.add_num(5)
    assert mf.find_median() == 5.0


def test_even_count_average():
    mf = MedianFinder()
    for n in [1, 3, 5, 7]:
        mf.add_num(n)
    assert mf.find_median() == 4.0   # (3 + 5) / 2


def test_odd_count_middle():
    mf = MedianFinder()
    for n in [2, 3, 4]:
        mf.add_num(n)
    assert mf.find_median() == 3.0


def test_out_of_order_insertion():
    mf = MedianFinder()
    for n in [5, 1, 3]:
        mf.add_num(n)
    assert mf.find_median() == 3.0   # sorted: [1, 3, 5]


def test_negatives():
    mf = MedianFinder()
    for n in [-5, -3, -1]:
        mf.add_num(n)
    assert mf.find_median() == -3.0


def test_growing_stream():
    mf = MedianFinder()
    mf.add_num(6)
    assert mf.find_median() == 6.0
    mf.add_num(10)
    assert mf.find_median() == 8.0   # (6+10)/2
    mf.add_num(2)
    assert mf.find_median() == 6.0   # sorted [2,6,10]
    mf.add_num(6)
    assert mf.find_median() == 6.0   # sorted [2,6,6,10], avg = 6.0
