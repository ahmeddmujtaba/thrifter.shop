from django import forms

locations = [
    (1, 'Toronto'),
    (2, 'Mississauga'),
    (3, 'Milton'),
    (4, 'Hamilton'),
]

filters = [
    (1, 'Newest'),
    (2, 'Oldest'),
    (3, 'Price:Low'),
    (4, 'Price:High'),
    (5, 'Closest Distance')

]

class SearchForm(forms.Form):
    
    minPrice = forms.IntegerField(required =False, widget = forms.NumberInput
                                (attrs={'placeholder':'Min Price'}))
    maxPrice = forms.IntegerField(required=False, widget = forms.NumberInput
                                (attrs={'placeholder':'Max Price'}))
    address = forms.CharField(max_length=100, widget = forms.TextInput
                                (attrs={'placeholder':'Enter your address'}))
    radius = forms.IntegerField( required=False, widget = forms.NumberInput
                                (attrs={'placeholder':'100km'}))
    filter = forms.CharField(required = False, label = 'Filter', widget = forms.Select(choices=filters))
