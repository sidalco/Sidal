# Generated by Django 4.2.7 on 2024-06-03 21:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0014_alter_contactusmap_mapurl'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='contactusmap',
            options={'ordering': ['mapURL'], 'verbose_name': 'Our Location On Google Map'},
        ),
    ]
