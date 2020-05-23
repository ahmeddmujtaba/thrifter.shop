from django import forms

locations = [
    (1, 'Toronto'),
    (2, 'Mississauga'),
    (3, 'Milton'),
    (4, 'Hamilton'),
]

filters = [
    (1, 'Most Relevant'),                
    (2, 'Price:Lowest'),
    (3, 'Price:Highest'),
    (4, 'Closest Distance')

]

dates = [
    (1,'Last Hour'),
    (2, 'Today'),
    (3, 'This Week'),
    (4, 'This Month'),
    (5, 'This Year'),
    (6, 'All Time')
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
    filter = forms.CharField(required = False, label = 'Sort', widget = forms.Select(choices=filters))

    date = forms.CharField(required = False, label = 'Post Date', widget = forms.Select(choices=dates))
